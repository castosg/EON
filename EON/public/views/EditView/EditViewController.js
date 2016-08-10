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

    vm.addChar = function() {
        vm.characters.push(charFactory(vm.editor.name, vm.editor.role, vm.editor.counters, vm.editor.counteredBy));
        clearEditor();
    }


    function clearEditor() {
        vm.editor = {};
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
