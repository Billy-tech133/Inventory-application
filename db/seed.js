const initializeDB = require('./createdb');
const populateDB = require('./populatedb');

async function seed() {
    try {
    await initializeDB();
    await populateDB();
    } catch (error) {
        console.error('Error during seeding:', error);
    }   
}

seed();
