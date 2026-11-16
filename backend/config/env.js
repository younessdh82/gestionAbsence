const path = require('node:path');
const dotenv = require('dotenv');

function readEnv(source = process.env) {
  const port = source.PORT || '4000';
  if (!/^\d+$/.test(port) || Number(port) < 1 || Number(port) > 65535) {
    throw new Error('PORT doit être un entier entre 1 et 65535.');
  }

  const mongoUri = source.MONGODB_URI?.trim();
  if (!mongoUri || !/^mongodb(?:\+srv)?:\/\//.test(mongoUri)) {
    throw new Error('MONGODB_URI est obligatoire et doit être une URI MongoDB valide.');
  }

  let frontend;
  try {
    frontend = new URL(source.FRONTEND_URL || 'http://localhost:3000');
    if (!['http:', 'https:'].includes(frontend.protocol) || frontend.username ||
        frontend.password || frontend.pathname !== '/' || frontend.search || frontend.hash) {
      throw new Error('Invalid origin');
    }
  } catch {
    throw new Error('FRONTEND_URL doit être une origine HTTP(S), sans chemin ni identifiants.');
  }

  const dbName = source.MONGODB_DB_NAME || 'school_attendance';
  if (!/^[a-zA-Z0-9_-]+$/.test(dbName)) {
    throw new Error('MONGODB_DB_NAME doit contenir uniquement lettres, chiffres, tirets ou underscores.');
  }

  return Object.freeze({ port: Number(port), mongoUri, dbName, frontendUrl: frontend.origin });
}

function loadEnv() {
  // Le chemin reste correct même si le serveur est lancé depuis un autre dossier.
  dotenv.config({ path: path.join(__dirname, '..', '.env'), quiet: true });
  return readEnv();
}

module.exports = { loadEnv, readEnv };
