var roleClaim = {
    /** @param {Creep} creep **/
    run: function(creep) {
        room = '[room W1N2]';
        if(creep.room.name != 'W1N2') {
            var exitdir = creep.room.findExitTo('W1N2', ['W1N2']);
            var exit = creep.pos.findClosestByRange(exitdir);
            creep.moveTo(exit);
        }
        if(creep.room.name == 'W1N2') {
            if(creep.room.controller) {
                if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }}}
    }
};

    module.exports = roleClaim;