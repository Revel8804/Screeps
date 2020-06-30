var loggingController = {
    /** @param {Room} room */
    run: function(room) {
        if(Game.time % 20 == 0) {
            var harvest = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvest');
            console.log('Harvesters: ' + room + harvest.length);
            var upgrade = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrade');
            console.log('Upgraders: ' + room + upgrade.length);
            var build = _.filter(Game.creeps, (creep) => creep.memory.role == 'build');
            console.log('Builders: ' + room + build.length);
        }
        console.log('****************************');
    }
};

    module.exports = loggingController;
