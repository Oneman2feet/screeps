module.exports = {

    // Makes a harvester from the given spawn
    make: function (spawn) {
        var name = 'harvester' + (++Memory.creep_number);
        spawn.createCreep(
            [Game.WORK, Game.CARRY, Game.MOVE],
            name
        );
        Memory.creeps[name].role = 'harvester';
    },
    
    run: function (creep) {
        // go to a source and harvest until full of energy
        if (creep.energy < creep.energyCapacity) {
            var sources = creep.room.find(Game.SOURCES);
            creep.moveTo(sources[0]);
            creep.harvest(sources[0]);
        }

        // then move to the spawn and transferEnergy
        else {
            creep.moveTo(Game.spawns.Spawn1);
            creep.transferEnergy(Game.spawns.Spawn1)
        }
    }
}