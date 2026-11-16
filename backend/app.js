const express = require('express');
const cors = require('cors');
const { isDatabaseConnected } = require('./config/db');

function createApp(config, databaseReady = isDatabaseConnected) {
  const app = express();
  app.disable('x-powered-by');
  app.use(cors({ origin: config.frontendUrl }));
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    const ready = databaseReady();
    res.status(ready ? 200 : 503).json({
      status: ready ? 'ok' : 'unavailable',
      database: ready ? 'connected' : 'disconnected',
    });
  });

  app.use((_req, res) => res.status(404).json({ message: 'Route introuvable.' }));
  app.use((error, _req, res, _next) => {
    const status = error.status >= 400 && error.status < 500 ? error.status : 500;
    res.status(status).json({
      message: status === 500 ? 'Erreur interne du serveur.' : 'Requête invalide.',
    });
  });

  return app;
}

module.exports = { createApp };
