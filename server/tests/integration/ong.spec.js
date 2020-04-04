const request = require('supertest');
const api = require('../../src/api');
const dbConnection = require('../../src/database/connection');

/* eslint-disable no-undef */
describe('/ongs', () => {
  beforeAll(async () => {
    await dbConnection.migrate.rollback();
    await dbConnection.migrate.latest();
  });

  afterAll(async () => {
    await dbConnection.destroy();
  });

  it('should create a new Ong', async () => {
    const newOng = {
      name: 'APADE3',
      email: 'apad@email.com',
      whatsapp: '+5591981334',
      city: 'Brasilia',
      state: 'DF',
    };

    const response = await request(api).post('/ongs').send(newOng);

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('ongId');
    expect(response.body.ongId).toHaveLength(8);
  });

  it('should list all Ongs', async () => {
    const response = await request(api).get('/ongs');

    expect(response.status).toEqual(200);
    expect(response.body).toHaveLength(1);
  });
});
