const request = require('supertest');
const app=require("../app");
const assert = require('assert');
describe('GET /user', function() {
    it('respond success', function(done) {
      request(app)
        .get('/index/initdata')
        .expect((res)=>{
            assert.equal(parseInt(res.text), 158);
        })
        .expect(200, done);
    });
    it('add success', function(done) {
        request(app)
          .get('/index/add')
          .expect((res)=>{
              assert.equal(parseInt(res.text), 159);
          })
          .expect(200, done);
      });
  });