import request from 'supertest';
import { app } from './app';

describe('Tests for App', () => {
    test('should successfully process the first request', async () => {
        await request(app).get('/').expect(200, { text: 'Hello World!' });
    });
});
