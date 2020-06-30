var spawn = {
    run: function() {
        var harvest = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvest');
    
        if(harvest.length < 5) {
            var newName = 'harvest' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Phred'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'harvest'}});        
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
