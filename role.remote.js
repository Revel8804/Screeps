var roleRemote = {
    /** @param {Creep} creep **/
    run: function(creep) {
        // target = Game.getObjectById(89b807750b171d8);

        if(creep.room.name != 'W1N2') {
            var exitdir = creep.room.findExitTo('W1N2', ['W1N2']);
            var exit = creep.pos.findClosestByRange(exitdir);
            creep.moveTo(exit);
        }
        if(creep.room.name == 'W1N2') {
            if(creep.room.controller) {
                if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }}}


    }
};

    module.exports = roleRemote;