var lazy = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var energyAvailable = 0;
        energyAvailable += Game.spawns.Phred.energy;
        _.filter(Game.structures, function(structure){
            if (structure.structureType == STRUCTURE_EXTENSION){
                energyAvailable += structure.energy;
                }});
            if(energyAvailable === Game.rooms.W1N1.energyCapacityAvailable ) {
                if(creep.memory.role == 'harvest') {
                    if(Game.flags.Lazy) {
                        creep.moveTo(Game.flags.Lazy);
                }}}}};
module.exports = lazy;




