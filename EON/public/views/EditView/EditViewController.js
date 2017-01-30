angular.module("EditView").controller("EditViewController", function(EditViewService, processRequestData) {
    var vm = this;
    vm.dbReturn = {};
    vm.documents = [];
    vm.characters = [];

    vm.Character = function(doc){
      this.name = doc.name;
      this.role = doc.role;
      this.counters = doc.counters;
      this.countered_by = doc.countered_by;
    }


/*
    vm.characters = [{
        name: 'Reaper',
        role: 'dps',
        counters: 'tanks',
        counteredBy: 'No one knows'
    }, {
        name: 'Tracer',
        role: 'disruptor',
        counters: 'backlines',
        counteredBy: 'winston'
    }, {
        name: 'Genji',
        role: 'disruptor',
        counters: 'my sanity',
        counteredBy: 'bad players'
    }, {
        name: 'Lucio',
        role: 'support',
        counters: 'damage',
        counterdBy: 'Racism'
    }];
    */
    vm.editor = {};
    vm.sendAlert = function(stuff, stuffTwo) {
        alert(stuff + stuffTwo);

    }
    vm.editChar = function(index) {
        giveToEditor(vm.characters[index]);
        vm.characters.splice(index, 1);
    }

    vm.deleteChar = function(index){
      vm.characters.splice(index, 1);
    }

    vm.addChar = function() {
        vm.characters.push(charFactory(vm.editor.name, vm.editor.role, vm.editor.counters, vm.editor.counteredBy));
        clearEditor();
    }

    //this method is for testing designDocs
    vm.useDesignDoc = function(){
      EditViewService.useDesignDoc().then(
        function(response){
          //on success
          //console.log(JSON.stringify(response));
          var stuff = processRequestData.getCharacterDocs(response);
          //console.log(JSON.stringify(stuff));
          angular.forEach(stuff, function(charact, key){
            vm.characters.push(charact.value);
            angular.forEach(charact.value, function(attribute, key){
              //console.log(" stuff: " + key + ":" + attribute);

            })
          })
        },
        function(error){
          //on error
          console.log('error: ' + JSON.stringify(error));
        }
      )
    }

/*
  This get request returns a database document.
  The document is here.  response.data.body.rows[0-n].doc

*/
    vm.loadChars = function(){
      console.log("I'm in getRequest");
      EditViewService.getRequest().then(
        function(response){
          vm.dbReturn = JSON.parse(JSON.stringify(response));
          vm.thingBody = eval("(" + vm.dbReturn.data.body + ")");
          angular.forEach(vm.thingBody.rows, function(doc, key){
            vm.documents.push(doc);
            //console.log('Stuff- ' + key +':' + doc);
            var character = new vm.Character(doc.doc);
            vm.characters.push(character);
          })

        },
        function(error){
          console.log('error: ' + JSON.stringify(error));
        }
      );
    }


    function clearEditor() {
        vm.editor = {};
    }

    function giveToEditor(target) {
        vm.editor.name = target.name;
        vm.editor.role = target.role;
        vm.editor.counters = target.counters;
        vm.editor.counteredBy = target.counteredBy;
    }

    function charFactory(charName, charRole, charCounters, charCounteredBy) {
        return {
            name: charName,
            role: charRole,
            counters: charCounters,
            counteredBy: charCounteredBy
        };
    }


    init = function (){
      vm.useDesignDoc();
    }

    init();
});
