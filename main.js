var roleHarvest = require('role.harvest');

module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvest.run(creep);
    }
}