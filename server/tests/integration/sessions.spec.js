const request = require('supertest');
const api = require('../../src/api');
const dbConnection = require('../../src/database/connection');

/* eslint-disable no-undef */
describe('/sessions', () => {
  beforeAll(async () => {
    await dbConnection.migrate.rollback();
    await dbConnection.migrate.latest();
  });

  afterAll(async () => {
    await dbConnection.destroy();
  });

  it('should return 404 if ong id is invalid', async () => {
    const response = await request(api).post('/sessions').send({
      id: 'xxxx',
    });

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty('error');
  });

  it('should create a session and return ong name', async () => {
    const {
      body: { ongId },
    } = await request(api).post('/ongs').send({
      name: 'APADE NEW',
      email: 'apad@email.com',
      whatsapp: '+5591981332',
      city: 'Brasilia',
      state: 'DF',
    });

    const response = await request(api).post('/sessions').send({
      id: ongId,
    });

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('name');
  });
});
