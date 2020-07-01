var loggingController = {
    /** @param {Room} room */
    run: function(room) {
        if(Game.time % 20 == 0) {
            var harvest = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvest');
            console.log('Harvesters: ' + room + ' ' + harvest.length);
            var upgrade = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrade');
            console.log('Upgraders: ' + room + ' ' + upgrade.length);
            var build = _.filter(Game.creeps, (creep) => creep.memory.role == 'build');
            console.log('Builders: ' + room + ' ' + build.length);
            var mine = _.filter(Game.creeps, (creep) => creep.memory.role == 'mine');
            console.log('Miners: ' + room + ' ' + mine.length);
            var repair = _.filter(Game.creeps, (creep) => creep.memory.role == 'repair');
            console.log('Repairers: ' + room + ' ' + repair.length); 
            console.log('Energy Capacity ' + room + ' ' + room.energyCapacityAvailable);           
            console.log('****************************');
        }
    }
};

    module.exports = loggingController;
