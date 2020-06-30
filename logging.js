var logging = {
    run: function(creep) {
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
        }}
        if(Game.time % 20 == 0) {
            var harvest = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvest');
            console.log('Harvesters: ' + harvest.length);
            var upgrade = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrade');
            console.log('Upgraders: ' + upgrade.length);
            var build = _.filter(Game.creeps, (creep) => creep.memory.role == 'build');
            console.log('Builders: ' + build.length);   
            console.log('****************************');       
        }
    }
};
module.exports = logging;