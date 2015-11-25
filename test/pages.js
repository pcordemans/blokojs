var request = require('supertest');


describe('basic pages', function(){

  var server;

  before(function(){
    server = require('../bloko');
  });

  after(function(){
    server.close();
  });

  it('get the home page at /', function(done){
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('get the editor page at /editor', function(done){
    request(server)
      .get('/editor')
      .expect(200, done);
  });

  it('get the about page at /about', function(done){
    request(server)
      .get('/about')
      .expect(200, done);
  });

  it('get the help page at /help', function(done){
    request(server)
      .get('/help')
      .expect(200, done);
  });
});
