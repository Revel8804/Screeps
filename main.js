var roleHarvest = require('role.harvest');
var roleUpgrade = require('role.upgrade');
var roleBuild = require ('role.build');
var lazy = require('lazy');
var random = require('random');
var spawn = require('spawn');
var roomers = require('roomers');

module.exports.loop = function () {

    _.forEach(Game.rooms, function(room) {
        if(room && room.controller && room.controller.my) {
            roomers.run(room);            
        }
    })

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvest') {
            roleHarvest.run(creep);
        }
        if(creep.memory.role == 'upgrade') {
            roleUpgrade.run(creep);
        }
        if(creep.memory.role == 'build') {
            roleBuild.run(creep);
        }
        lazy.run(creep);
        spawn.run(creep);
    }
        random.run();
}
// Game.spawns['Phred'].spawnCreep( [WORK, WORK, CARRY, MOVE], 'name', { memory: { role: '' } } );