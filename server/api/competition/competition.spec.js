'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var agent = request.agent();
var backlink_host = 'http://localhost:8080'

describe('GET / backlinks', function() {
  it('should render the index page', function(done) {
    var sample_url = backlink_host + '/backlinks?host=www.merriweather.ca';
    console.log(sample_url);
    agent
    .get(sample_url)
    .end(function(err, res) {
      should.not.exist(err);
      res.should.have.status(200);
      done();
    })
  })
});

describe('GET /api/competitions', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/competitions')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  it('should be able to fetch backlinks', function(done) {
    request(app)
    .get('http://localhost:8080/backlinks?host=www.merriweather.ca')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      done();
    });
  });
});
