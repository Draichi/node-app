var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function () {

    beforeEach(function(done){
        var conn = express.infra.connectionFactory();
        conn.query("delete from produtos", function(ex,result){
            if(!ex){
                done();
            }
        });
    });

    it('#listagem json', function (done) {
        request.get('/produtos')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });

    it('#listagem html', function (done) {
        request.get('/produtos')
        .set('Accept','text/html')
        .expect(200,done);
    });

    it('#cadastro de novos produtos invalidos', function(done){
        request.post('/produtos')
        .send({titulo:"", preco:20.5, descricao:"descricao via test mocha"})
        .expect(400,done);
    });
    
    it('#cadastro de novos produtos validos', function(done){
        request.post('/produtos')
        .send({titulo:"titulo de test via mocha", preco:20.5, descricao:"descricao via test mocha"})
        .expect(302,done);
    });
});