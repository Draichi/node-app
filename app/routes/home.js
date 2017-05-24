module.exports = function(app){
    app.get('/',function(req,res){
        var connection = app.infra.connectionFactory();
		var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        ProdutosDAO.lista(function (erros, resultados) {
            res.render('home/index',{livros:resultados});
        });
        connection.end();
    });
}