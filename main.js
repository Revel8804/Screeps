var roomers = require('roomers');

module.exports.loop = function () {
    _.forEach(Game.rooms, function(room) {
        if(room && room.controller && room.controller.my) {
            roomers.run(room);            
            }})}
// Game.spawns['Phred'].spawnCreep( [WORK, WORK, CARRY, MOVE], 'name', { memory: { role: '' } } );