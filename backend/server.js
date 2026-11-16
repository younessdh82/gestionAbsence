const { once } = require('node:events');
const { loadEnv } = require('./config/env');
const { connectDB, disconnectDB } = require('./config/db');
const { createApp } = require('./app');

async function startServer() {
  const config = loadEnv();
  await connectDB(config);
  console.log('MongoDB connecté.');

  const server = createApp(config).listen(config.port);
  await once(server, 'listening');
  console.log(`API disponible sur http://localhost:${config.port}`);

  let closing = false;
  async function shutdown() {
    if (closing) return;
    closing = true;
    const timeout = setTimeout(() => process.exit(1), 10000);
    timeout.unref();
    server.close(async () => {
      try {
        await disconnectDB();
      } finally {
        clearTimeout(timeout);
      }
    });
  }
  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
  return server;
}

if (require.main === module) {
  startServer().catch(async () => {
    // Ne jamais écrire l'URI ou des identifiants de connexion dans les journaux.
    console.error('Démarrage impossible. Vérifiez les variables de backend/.env, l’accès MongoDB et la disponibilité du port.');
    await disconnectDB().catch(() => {});
    process.exitCode = 1;
  });
}

module.exports = { startServer };
