//Source:  https://codeforgeek.com/unit-testing-nodejs-application-using-mocha/
var supertest = require("supertest");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:3000");

// UNIT test begin
describe('GET /', function() {
      it('respond with html', function(done) {
         server
         .get('/')
         .expect('Content-Type', /html/)
         .expect(200, done);
      });
});

describe('GET /', () => {
      it('returns 3 for hard-coded variables', () => {
            server.get('/').expect(response =>{
                  expect(response.body).toEqual("1 + 2 = 3")
            })
      });
});

describe('GET /add/2/5', () => {
      it('returns 7 for /add/2/5 route', () => {
            server.get('/add/2/5').expect(response =>{
                  expect(response.body).toEqual("2 + 5 = 7")
            })
      });
});

describe('GET /add/0/0', () => {
      it('returns 0 for /add/0/0 route', () => {
            server.get('/add/0/0').expect(response =>{
                  expect(response.body).toEqual("0 + 0 = 0")
            })
      });
});