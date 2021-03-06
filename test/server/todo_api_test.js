'use strict';

process.env.MONGOLAB_URI = 'mongodb://localhost/ngbook_test';
require('../../server.js');

var chai = require('chai');
var chaihttp = require('chai-http');
var mongoose = require('mongoose');
var Todo = require('../../models/Todo');

chai.use(chaihttp);

var expect = chai.expect;
var urlBase = 'localhost:3000/api/v1';

// Tests ======================================================================
describe('Todo endpoints', function() {

  // Setup --------------------------------------------------------------------
  var todoId;

  // Drop test database
  before(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  // Populate test database with seed data and set test variables
  before(function(done) {
    var newTodo = new Todo();
    newTodo.text = 'Must finish project!';
    newTodo.save(function(err, todo) {
      if (err) { return console.error('Could not create todo.'); }

      todoId = todo._id;

      done();
    });
  });

  // Tests --------------------------------------------------------------------

  // GET
  it('should get a todo', function(done) {
    chai.request(urlBase)
      .get('/todo')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.length).to.eql(1);
        expect(res.body[0].text).to.eql('Must finish project!');

        done();
      });
  });

  // POST
  it('should create a todo', function(done) {
    chai.request(urlBase)
      .post('/todo')
      .send({'text': 'Build an app.'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.exist; // jshint ignore:line
        expect(res.body.text).to.eql('Build an app.');

        done();
      });
  });

  // PUT
  it('should overwrite a todo', function(done) {
    chai.request(urlBase)
      .put('/todo/' + todoId)
      .send({'text': 'Build a better app!'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.exist; // jshint ignore:line
        expect(res.body.text).to.eql('Build a better app!');

        done();
      });
  });

  // DELETE
  it('should delete a todo', function(done) {
    chai.request(urlBase)
      .delete('/todo/' + todoId)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.body.msg).to.eql('Todo with id: ' + todoId + ' deleted.');

        done();
      });
  });

});
