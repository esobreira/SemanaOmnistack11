const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        //await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ong', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'asd')
            .send(
                {
                    name: 'Associação Beto Sobreira para Retardados kkkk',
                    email: 'eberton@outlook.com',
                    whatsapp: '11964036631',
                    city: 'Várzea Paulista',
                    uf: 'SP'
                }
            );

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        //console.log(response.body);
    })
});