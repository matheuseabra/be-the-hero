const request = require('supertest');
const api = require('../../src/api');
const dbConnection = require('../../src/database/connection');

/* eslint-disable no-undef */
describe('/incidents', () => {
  beforeAll(async () => {
    await dbConnection.migrate.rollback();
    await dbConnection.migrate.latest();
  });

  afterAll(async () => {
    await dbConnection.destroy();
  });

  it('should create a new Incident', async () => {
    const newOng = {
      name: 'APADE3',
      email: 'apad@email.com',
      whatsapp: '+5591981334',
      city: 'Brasilia',
      state: 'DF',
    };

    const {
      body: { ongId },
    } = await request(api).post('/ongs').send(newOng);

    const newIncident = {
      title: 'APADE3',
      description: 'apad@email.com',
      price: '$ 120',
    };

    const response = await request(api)
      .post('/incidents')
      .set('Authorization', ongId)
      .send(newIncident);

    expect(response.body).toHaveProperty('id');
  });

  it('should not create a new Incident if not authorized', async () => {
    const newIncident = {
      title: 'APADE3',
      description: 'apad@email.com',
      price: '$ 120',
    };

    const response = await request(api)
      .post('/incidents')
      .set('Authorization', 'xxxx')
      .send(newIncident);

    expect(response.body).toHaveProperty('error');
  });
});
