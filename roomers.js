var roleHarvest = require('role.harvest');
var roleUpgrade = require('role.upgrade');
var roleBuild = require ('role.build');
var lazy = require('lazy');
var random = require('random');
var spawn = require('spawn');

var roomers = {
    /** @param {Room} room **/
    run: function(room) {
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
            spawn.run(room);
        }
            random.run();
    
    }
};
module.exports = roomers;
