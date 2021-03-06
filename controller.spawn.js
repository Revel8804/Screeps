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
function uhoh(segment, room) {
    var energyAvailable = 0;
    energyAvailable += Game.spawns.Phred.energy;
    _.filter(Game.structures, function(structure){
        if (structure.structureType == STRUCTURE_EXTENSION){
            energyAvailable += structure.energy;
            }
        });
    let body = [];
    let segmentCost = _.sum(segment, s => BODYPART_COST[s]);
    let maxSegments = Math.floor(energyAvailable / segmentCost);

    _.times(maxSegments, function() {
        _.forEach(segment, s => body.push(s));
    });

    return body;
};
var spawnController = {

    /** @param {Room} room */
    run: function(room){

        // Get minimum number of creeps per job
        let minNumberOfTransport = _.get(room.memory, ['census', 'transport'], 1);
        let minNumberOfHarvest = _.get(room.memory, ['census', 'harvest'], 1);
        let minNumberOfUpgrade = _.get(room.memory, ['census', 'upgrade'], 1);
        let minNumberOfRepair = _.get(room.memory, ['census', 'repair'], 1);
        let minNumberOfBuild = _.get(room.memory, ['census', 'build'], 1);
        let minNumberOfMine = _.get(room.memory, ['census', 'mine'], 1);
        let minNumberOfWall = _.get(room.memory, ['census', 'wall'], 1);
        let minNumberOfClaim = _.get(room.memory, ['census', 'claim'], 1);
        
        // Check how many creeps of each role we have
        var numberOfTransport = _.sum(Game.creeps, (creep) => creep.memory.role == 'transport');
        var numberOfHarvest = _.sum(Game.creeps, (creep) => creep.memory.role == 'harvest');
        var numberOfUpgrade = _.sum(Game.creeps, (creep) => creep.memory.role == 'upgrade');
        var numberOfRepair = _.sum(Game.creeps, (creep) => creep.memory.role == 'repair');
        var numberOfBuild = _.sum(Game.creeps, (creep) => creep.memory.role == 'build');
        var numberOfMine = _.sum(Game.creeps, (creep) => creep.memory.role == 'mine');
        var numberOfWall = _.sum(Game.creeps, (creep) => creep.memory.role == 'wall');
        var numberOfClaim = _.sum(Game.creeps, (creep) => creep.memory.role == 'claim');
       
        // Check to see if we need more creeps of each job
        var name = -1;
        if (!numberOfHarvest && (!numberOfMine || !numberOfTransport)) {
            name=Game.spawns.Phred.createCreep([WORK, CARRY, MOVE],undefined, {role: 'harvest', working: false, target: undefined});
        }
        if (numberOfMine == 0) {
            name=Game.spawns.Phred.createCreep(uhoh([WORK, CARRY, MOVE], room),undefined, {role: 'mine', working:false, target: undefined});
        }
        if (numberOfTransport == 0) {
            name=Game.spawns.Phred.createCreep(uhoh([CARRY, MOVE], room),undefined, {role: 'transport', working:false, target: undefined});
        }

        if(name == -1 && numberOfHarvest < minNumberOfHarvest) {
            name=Game.spawns.Phred.createCreep(getBody([WORK, CARRY, MOVE], room),undefined, {role: 'harvest', working:false, target: undefined});
        }
        else if(name == -1 && numberOfMine < minNumberOfMine) {
            name=Game.spawns.Phred.createCreep(getBody([WORK, CARRY, MOVE], room),undefined, {role: 'mine', working:false, target: undefined});
        }
        else if(name == -1 && numberOfTransport < minNumberOfTransport) {
            name=Game.spawns.Phred.createCreep(getBody([CARRY, CARRY, MOVE], room),undefined, {role: 'transport', working:false, target: undefined});
        }
        else if(name == -1 && numberOfUpgrade < minNumberOfUpgrade) {
            name=Game.spawns.Phred.createCreep(getBody([WORK, CARRY, MOVE], room),undefined, {role: 'upgrade', working:false, target: undefined});
        }
        else if(name == -1 && numberOfBuild < minNumberOfBuild && room.find(FIND_CONSTRUCTION_SITES).length > 0) {
            name=Game.spawns.Phred.createCreep(getBody([WORK, CARRY, MOVE], room),undefined, {role: 'build', working:false, target: undefined});
        }
        else if(name == -1 && numberOfRepair < minNumberOfRepair) {
            name=Game.spawns.Phred.createCreep(getBody([WORK, CARRY, MOVE], room),undefined, {role: 'repair', working:false, target: undefined});
        }
        else if(name == -1 && numberOfWall < minNumberOfWall) {
            name=Game.spawns.Phred.createCreep(getBody([WORK, CARRY, MOVE], room),undefined, {role: 'wall', working:false, target: undefined});
        }
        else if(name == -1 && numberOfClaim < minNumberOfClaim) {
         name=Game.spawns.Phred.createCreep(getBody([CLAIM, MOVE], room),undefined, {role: 'claim', working:false, target: undefined});
        }

    
        if (!(name < 0)) {
             // console.log("Spawned new " + creep.memory.role + " creep: " + name);
        }
    }    
};

module.exports = spawnController;