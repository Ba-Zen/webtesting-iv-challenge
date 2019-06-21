const supertest = require('supertest');

const server = require('./server');

describe('server', () => {
  describe('GET /', () => {
    it('responds with 200 OK', async () => {
      await supertest(server)
        .get('/')
        .expect('Content-Type', /json/i);
    });
  });

  //   describe('GET /names', () => {
  //     it('responds with 200 OK', async () => {
  //       await supertest(server)
  //         .get('/api/names')
  //         .expect(200);
  //     });
  //   });
});
