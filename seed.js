// require('dotenv').config();
// require('./config/database');

// const Movie = require('./models/performance');
// const Performer = require('./models/performer');

// // For better organization, the seed data is being stored in a separate data.js module
// const data = require('./data');

// // await needs an async function - use an async IIFE!
// (async function() {
//   // Save the promises (or call right in the array if feeling frisky)
//   const p1 = Performance.deleteMany({});
//   const p2 = Performer.deleteMany({});
  
//   // Promise.all will return a single promise that resolves
//   // only after all of the array's promises resolve
//   let results = await Promise.all([p1, p2]);
//   // results will be an array of result objects!
//   console.log(results);

//   // This time, provide the array of promises in-line
//   results = await Promise.all([
//     Performance.create(data.performances),
//     Performer.create(data.performers)
//   ]);
//   console.log('Created performances:', results[0]);
//   console.log('Created performers:', results[1]);

//   // Associate Mark Hamill with Star Wars - A New Hope
//   results = await Promise.all([
//     // Using regular expressions allows a partial match
//     Performance.findOne({ title: /Star / }),
//     Performer.findOne({ name: /Mark / })
//   ]);
//   // One day we'll destructure results like this:
//   // const [starWars, mark] = results;
//   const starWars = results[0];
//   const mark = results[1];
//   starWars.cast.push(mark._id);
//   await starWars.save();
//   console.log('Star Wars with Mark Hamill', starWars);

//   // Lastly, use process.exit() to "cleanly" shut down the Node program
//   process.exit();
// })();
// seed.js
require('dotenv').config();
require('./config/database');

const Performance = require('./models/performance'); 
const { performances } = require('./data'); 

(async function() {
  try {
   
    await Performance.deleteMany({});

 
    const seededPerformances = await Performance.create(performances);
    console.log('Database seeded with the following performances:', seededPerformances);
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
   
    process.exit();
  }
})();
