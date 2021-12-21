
const dotenv = require('dotenv');
dotenv.config();

const config = {
  mongodb: {
    url: process.env.DATABASE_ADMIN_URL,

    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    },
  },

  migrationsDir: 'migrations',

  changelogCollectionName: 'changelog',

  migrationFileExtension: '.js',

  // Enable the algorithm to create a checksum of the file contents and use that in the comparison to determin
  // if the file should be run.  Requires that scripts are coded to be run multiple times.
  useFileHash: false,
};

// Return the config as a promise
module.exports = config;
