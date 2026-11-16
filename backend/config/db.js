const mongoose = require('mongoose');

async function connectDB(config) {
  await mongoose.connect(config.mongoUri, {
    dbName: config.dbName,
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  });
  // Une sélection de serveur seule ne suffit pas : vérifier une commande réelle.
  await mongoose.connection.db.admin().ping();
}

async function disconnectDB() {
  await mongoose.disconnect();
}

function isDatabaseConnected() {
  return mongoose.connection.readyState === 1;
}

module.exports = { connectDB, disconnectDB, isDatabaseConnected };
