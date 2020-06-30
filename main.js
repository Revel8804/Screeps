var roleHarvest = require('role.harvest');
var roleUpgrade = require('role.upgrade');
var lazy = require('lazy');
var random = require('random');
module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvest') {
            roleHarvest.run(creep);
        }
        if(creep.memory.role == 'upgrade') {
            roleUpgrade.run(creep);
        }
        lazy.run(creep);
    }
    random.run();
}
// Game.spawns['Phred'].spawnCreep( [WORK, WORK, CARRY, MOVE], 'name', { memory: { role: '' } } );