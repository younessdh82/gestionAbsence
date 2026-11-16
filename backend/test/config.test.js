const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readEnv } = require('../config/env');

const values = {
  PORT: '4000',
  MONGODB_URI: 'mongodb://127.0.0.1:27017/',
  FRONTEND_URL: 'http://localhost:3000',
};

test('charge les variables et sélectionne explicitement la base applicative', () => {
  assert.deepEqual(readEnv(values), {
    port: 4000, mongoUri: values.MONGODB_URI,
    frontendUrl: values.FRONTEND_URL, dbName: 'school_attendance',
  });
  assert.equal(readEnv({ ...values, MONGODB_DB_NAME: 'attendance_test' }).dbName, 'attendance_test');
});

test('refuse les ports invalides', () => {
  for (const PORT of ['0', '-1', '65536', '4000abc', '4.5']) {
    assert.throws(() => readEnv({ ...values, PORT }), /PORT/);
  }
});

test('refuse une URI absente ou invalide sans exposer sa valeur', () => {
  assert.throws(() => readEnv({}), /MONGODB_URI/);
  assert.throws(() => readEnv({ ...values, MONGODB_URI: 'https://secret:password@example.com' }),
    (error) => error.message.includes('MONGODB_URI') && !error.message.includes('password'));
});

test('valide une origine frontend et rejette les chemins et protocoles inattendus', () => {
  for (const FRONTEND_URL of ['invalid', 'file:///tmp', 'http://localhost:3000/path', 'http://user:pass@localhost']) {
    assert.throws(() => readEnv({ ...values, FRONTEND_URL }), /FRONTEND_URL/);
  }
  assert.equal(readEnv({ ...values, FRONTEND_URL: 'http://localhost:3000/' }).frontendUrl, values.FRONTEND_URL);
});
