const { test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const { createApp } = require('../app');

test('health, CORS et erreurs HTTP', async (t) => {
  let connected = true;
  const server = createApp({ frontendUrl: 'http://localhost:3000' }, () => connected).listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise((resolve) => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}`;

  const response = await fetch(`${base}/api/health`, { headers: { Origin: 'http://localhost:3000' } });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok', database: 'connected' });
  assert.equal(response.headers.get('access-control-allow-origin'), 'http://localhost:3000');
  assert.equal(response.headers.get('x-powered-by'), null);

  const otherOrigin = await fetch(`${base}/api/health`, { headers: { Origin: 'http://other.example' } });
  assert.notEqual(otherOrigin.headers.get('access-control-allow-origin'), 'http://other.example');

  connected = false;
  const unavailable = await fetch(`${base}/api/health`);
  assert.equal(unavailable.status, 503);
  assert.deepEqual(await unavailable.json(), { status: 'unavailable', database: 'disconnected' });
  assert.equal((await fetch(`${base}/missing`)).status, 404);

  const invalid = await fetch(`${base}/api/health`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{invalid',
  });
  assert.equal(invalid.status, 400);
  assert.deepEqual(await invalid.json(), { message: 'Requête invalide.' });
});
