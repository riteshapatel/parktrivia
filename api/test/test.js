/**
 * @module test.js 
 * @author ritesh patel 
 * tests trivia api with mocha / chai
 */
let chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../server'),
    should = chai.should(),
    expect = chai.expect;

chai.use(chaiHttp);

// check trivia endpoint
describe('GET trivia', () => {
    it('it should GET all trivia questions', (done) => {
        chai.request(server)
            .get('/questions')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.be.a('object');
                expect(res.body).to.have.property('status', 'success');
                expect(res.body).to.have.property('data');
                done();
        });
    });
});

// check handshake endpoint
describe('GET handshake', () => {
    it('it should GET api handshake message', (done) => {
        chai.request(server)
        .get('/handshake')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            expect(res.body.status).to.equal('success');
            expect(res.body.data).to.equal('React Native Trivia Game!');
            done();
        })
    })
});

// test json object properties
describe('GET trivia and check properties', () => {
    it('it should check properties of a single trivia question', (done) => {
        chai.request(server)
            .get('/questions')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.have.property('status', 'success');
                expect(res.body.data[0].results[0]).to.have.property('category');
                expect(res.body.data[0].results[0]).to.have.property('type');
                expect(res.body.data[0].results[0]).to.have.property('difficulty');
                expect(res.body.data[0].results[0]).to.have.property('question');
                expect(res.body.data[0].results[0]).to.have.property('incorrect_answers');
                done();
        });
    });
});

// check # of trivia questions
describe('GET trivia and assure number of questions', () => {
    it('it should confirm total of questions in a trivia', (done) => {
        chai.request(server)
            .get('/questions')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body).to.have.property('status', 'success');
                expect(res.body).to.have.property('data');

                // check trivia questions array
                res.body.data[0].results.should.be.a('array');
                expect(res.body.data[0].results).to.have.lengthOf(12);
                done();
        });
    });
});