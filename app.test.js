// app.test.js
const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });
});

describe('GET /not-found', () => {
  it('responds with 404 for unknown routes', async () => {
    const res = await request(app).get('/not-found');
    expect(res.statusCode).toBe(404);
  });
});

describe('Header validation', () => {
  it('checks if the Content-Type header is correct', async () => {
    const res = await request(app).get('/');
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });
});

describe('POST /', () => {
  it('responds with 404 for unsupported methods', async () => {
    const res = await request(app).post('/');
    expect(res.statusCode).toBe(404);
  });
});
