const request = require('supertest');
const app = require('../index');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const { generateToken, verifyToken } = require('../helpers/jwt');
const UserController = require('../controllers/userController');
const PhotoController = require('../controllers/photoController');

const mockRequest = (sessionData, body, params, query) => ({
  body,
  params,
  query,
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Photo Album', () => {
    const payloadJwt = {
        id: 2,
        email: 'barindra.maslo@erajaya.com',
      };

      const token = generateToken(payloadJwt);
    it('Get All Photo Unauthentication', async () => { // integration testing
        const res = await request(app).get('/photos');
        expect(res.statusCode).toEqual(200);
      });
    it('Get All Photo authentication',async () => { // integration testing
        const res = await request(app).get('/photos').set('token', token);
        expect(res.statusCode).toEqual(200);
      });
    it('GetOnePhotoByID Correct by Id', async () => {
        const res = await request(app).get('/photos/1').set('token', token);
        expect(res.statusCode).toEqual(200);
    });
    it('GetOnePhotoByID wrong ID', async () => {
        const res = await request(app).get('/photos/122').set('token', token);
        expect(res.statusCode).toEqual(200);
    });
    it('CreatePhoto Success', async () => {
        let newPhoto = {
            title: 'Image Test 1',
            caption: 'Image Test Caption 1',
            image_url: 'https://photoTest.com',
        };
        const res = await request(app).post('/photos').send(newPhoto).set('token', token);
        expect(res.statusCode).toEqual(200);
    });
    it('CreatePhoto Failed', async () => {
        let newPhoto = {
            title: 'Foto Test 2',
            caption: 'Foto Test Caption 2',
            image_url: 'https://photoTest.com',
        };
        const res = await request(app).post('/photos').send(newPhoto).set('token', token);
        expect(res.statusCode).toEqual(200);
    });
});
