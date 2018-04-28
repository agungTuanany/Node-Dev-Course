const request = require('supertest');
const expect = require('expect');
var app = require("./server").app;

it('should return hello world response', (done) => {
    request(app)
        .get('/')
        // .expect('Hello, world!')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                name: "Todo app V1.0"
            });
        })
        .end(done);
});

//Make a new test
// assert 200
// using custom expect assert
// assert that you exist in user array
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