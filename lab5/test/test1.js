//Source:  https://codeforgeek.com/unit-testing-nodejs-application-using-mocha/
var supertest = require("supertest");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:3000");

// UNIT test begin
describe('for dzialania file', () => {
    it('returns 25,1,10,0', () => {
        server.get('/calc/dzialania.json').expect(response =>{
            expect(response.body).toEqual("5 * 5 = 25, 5 / 5 = 1, 5 + 5 = 10, 5 - 5 = 0")
        })
    });
});

describe('for dzialania1 file', () => {
    it('returns Infinity', () => {
        server.get('/calc/dzialania.json').expect(response =>{
            expect(response.body).toEqual("1 / 0 = Infinity")
        })
    });
});