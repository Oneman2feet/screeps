// holds all the different methods relating to each creep role
var creep_types = {
    harvester: require('harvester')
};

// setup commands
if (!Memory.creep_number) {
    Memory.creep_number = 0;
}

// make a harvester if we can
for (var name in Game.spawns) {
    var spawn = Game.spawns[name];
    if (!spawn.spawning && spawn.energy > 120) {
        creep_types.harvester.make(spawn);
    }
}

// give all the creeps instructions
for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    creep_types[creep.memory.role].run(creep);

    /*
    if (creep.memory.role == 'harvester') {
        harvester(creep);
    }

    if (creep.memory.role == 'builder') {
    
        if(creep.energy == 0) {
            creep.moveTo(Game.spawns.Spawn1);
            Game.spawns.Spawn1.transferEnergy(creep);
        }
        else {
            var targets = creep.room.find(Game.CONSTRUCTION_SITES);
            if(targets.length) {
                creep.moveTo(targets[0]);
                creep.build(targets[0]);
            }
        }
    }
    
    if (creep.memory.role == 'guard') {
        var targets = creep.room.find(Game.HOSTILE_CREEPS);
        if(targets.length) {
            creep.moveTo(targets[0]);
            creep.attack(targets[0]);
    }
    */
}