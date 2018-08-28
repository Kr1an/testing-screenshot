const getFreePort = require('get-port')
const request = require('supertest');
const createHttpServer = require('lib/create-http-server');

const processProject = require('lib/process-project')
jest.mock('lib/process-project')


describe("createHttpServer", () => {
    it("should create object", async () => {
        const freePort = await getFreePort();
        const app = createHttpServer(freePort);
        expect(app).toBeTruthy();
    })
    it("should be callable with POST and id", async () => {
        const freePort = await getFreePort();
        const app = createHttpServer(freePort);
        const result = await request(app).post("/").send({ id: '123' })
        expect(result.statusCode).toBe(200);
        expect(processProject).toHaveBeenCalledTimes(1);
    })
    it("should return 400 if id is not supplied", async () => {
        const freePort = await getFreePort();
        const app = createHttpServer(freePort);
        const result = await request(app).post("/").send()
        expect(result.statusCode).toBe(400);
        expect(processProject).not.toHaveBeenCalled();
    })
})

