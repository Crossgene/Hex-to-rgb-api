const request = require('supertest');
const { app } = require('../index');  // import Express app

describe('GET /hex-to-rgb/:hex', () => {
  it('should return correct rgb for #FF0000', async () => {
    const res = await request(app).get('/hex-to-rgb/FF0000');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ r: 255, g: 0, b: 0 });
  });

  it('should return error for invalid hex', async () => {
    const res = await request(app).get('/hex-to-rgb/XYZ123');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid HEX format');
  });
});
