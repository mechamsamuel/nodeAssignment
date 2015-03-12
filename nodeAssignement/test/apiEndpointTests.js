/**
 * Created by samuelmecham on 3/12/15.
 */

var request = require('supertest')
    , express = require('express');

var app = require("../app");

var users = require('../routes/users.js');

describe('GET /users', function(){
    it('respond with html', function(done){
        request(app)
            .get('/')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200, done);
    })
});

describe('POST /users', function(){
    it('respond with particular JSON structure', function(done){
        request(app)
            .post('/post')
            .send({userName: "Sam", address: "237 W Garden Park", age:"23"})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({userName: "Sam", address: "237 W Garden Park", age:"23"})
            .expect(200, done);
    })
});