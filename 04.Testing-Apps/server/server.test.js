const request = require('supertest');
const expect = require('expect');
var app = require("./server").app;

describe('server', () => {
    it('should return hello world response', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: "Todo app V1.0"
                });
            })
            .end(done);
    });

    describe('#users', () => {
        it('should return name as Jono, addres at Kodam age is 25', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    address: 'Kodam Jaya',
                    name: 'Jono',
                    age: 25
                }).toBeA('object');
            })
            .end(done);
        });

        it('should return name Jaroko and addres Kodim Pusat', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) =>{
                expect(res.body).toInclude({
                    name: 'Jaroko',
                    address: "Kodim Pusat"
                }).toBeA('object');
            })
            .end(done);
        });

        it('should return name Ucha and age is 32', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    age: 32,
                    name: 'Ucha'
                }).toBeA('object');
            })
            .end(done);
        });
    });

    describe("#async", () => {
        it('should return name Sam and addres Kodim Pusat', (done) => {
            request(app)
            .get('/users-2')
            .expect(200)
            .expect((res) =>{
                expect(res.body).toInclude({
                    name: 'Sam',
                    address: "Kodim Pusat",
                    age: 23
                }).toBeA('object');
            })
            .end(done);
        });

        it('should return name Tony and age is 32', (done) => {
            request(app)
            .get('/users-2')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    age: 32,
                    name: 'Tony',
                    address: 'Koramil Pusat',
                }).toBeA('object');
            })
            .end(done);
        });
    });

});