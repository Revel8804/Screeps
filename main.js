var roleHarvest = require('role.harvest');
var roleUpgrade = require('role.upgrade');
var lazy = require('lazy');

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvest') {
            roleHarvest.run(creep);
            lazy.run(creep);
        }
        if(creep.memory.role == 'upgrade') {
            roleUpgrade.run(creep);
        }
    }
}