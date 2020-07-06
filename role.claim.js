var roleClaim = {
    /** @param {Creep} creep **/
    run: function(creep) {
           if (creep.memory.working) {

            if(creep.pos.isNearTo(target)) {
                creep.transfer(target, RESOURCE_ENERGY)
            } 
            else {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        if(!target) {
            if(Game.flags.Lazy) {
                creep.moveTo(Game.flags.Lazy);
            }
        }
    }
};

    module.exports = roleClaim;