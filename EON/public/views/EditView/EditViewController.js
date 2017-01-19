angular.module("EditView").controller("EditViewController", function(EditViewService) {
    var vm = this;
    vm.dbReturn = {};
    vm.characters = {};


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

    vm.getRequest = function(){
      console.log("I'm in getRequest");
      EditViewService.getRequest().then(
        function(response){
          console.log('success: ' + JSON.stringify(response));
          var fixedResponse = JSON.stringify(response).replace(/\\'/g, "'");
          vm.dbReturn = JSON.parse(fixedResponse);

          angular.forEach(vm.dbReturn.data.body[1], function(value, key){
            console.log('Stuff- ' + key +':' + value);
          })
          console.log('Response: ' + vm.dbReturn);
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




});
