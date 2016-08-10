angular.module("EditView").controller("EditViewController", function(EditViewService) {
    var vm = this;

    vm.characters = [{
        name: 'Reaper',
        role: 'dps',
        counters: 'tanks',
        counteredBy: 'noone knows'
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
        counterdBy: 'autotarget'
    }];
    vm.editor = {};
    vm.sendAlert = function(stuff, stuffTwo) {
        alert(stuff + stuffTwo);

    }
    vm.editChar = function(index){
      //console.log(vm.characters[index]);
      giveToEditor(vm.characters[index]);
      vm.characters.splice(index, 1);
    }

    vm.addChar = function() {
        vm.characters.push(charFactory(vm.editor.name, vm.editor.role, vm.editor.counters, vm.editor.counteredBy));
        clearEditor();
    }


    function clearEditor() {
        vm.editor = {};
    }

    function giveToEditor (target){
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
