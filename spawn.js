function getBody(segment, room) {
    let body = [];
    let segmentCost = _.sum(segment, s => BODYPART_COST[s]);
    let energyAvailable = room.energyCapacityAvailable;
    let maxSegments = Math.floor(energyAvailable / segmentCost);

    _.times(maxSegments, function() {
        _.forEach(segment, s => body.push(s));
    });

    return body;
};
var spawn = {
    /** @param {Room} room **/
    run: function() {
        var harvest = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvest');
        var upgrade = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrade');
        var build = _.filter(Game.creeps, (creep) => creep.memory.role == 'build');
    
        if(harvest.length < 5) {
            var newName = 'harvest' + Game.time;
            console.log('Spawning new Harvester: ' + newName);
            Game.spawns['Phred'].spawnCreep((getBody[WORK, WORK, CARRY, CARRY, MOVE, MOVE]), newName, 
                {memory: {role: 'harvest'}});        
        }
        if(upgrade.length < 5) {
            var newName = 'upgrade' + Game.time;
            console.log('Spawning new Upgrader: ' + newName);
            Game.spawns['Phred'].spawnCreep((getBody[WORK, WORK, CARRY, CARRY, MOVE, MOVE]), newName, 
            {memory: {role: 'upgrade'}});        
        }
        if(build.length < 5) {
            var newName = 'build' + Game.time;
            console.log('Spawning new Builder: ' + newName);
            Game.spawns['Phred'].spawnCreep((getBody[WORK, WORK, CARRY, CARRY, MOVE, MOVE]), newName, 
            {memory: {role: 'build'}});        
        }


        
        if(Game.spawns['Phred'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Phred'].spawning.name];
            Game.spawns['Phred'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Phred'].pos.x + 1, 
                Game.spawns['Phred'].pos.y, 
                {align: 'left', opacity: 0.8});
        }
    }
};
module.exports = spawn;
