function setRoutes(app) {
    const CarrinhoController = require('../controllers/CarrinhoController');
    const EstoqueController = require('../controllers/EstoqueController');

    const carrinhoController = new CarrinhoController();
    const estoqueController = new EstoqueController();

    app.get('/carrinho', carrinhoController.getItems.bind(carrinhoController));
    app.post('/carrinho', carrinhoController.addItem.bind(carrinhoController));
    app.delete('/carrinho/:id', carrinhoController.removeItem.bind(carrinhoController));
    app.post('/carrinho/clear', carrinhoController.deleteAllItems.bind(carrinhoController));

    app.get('/estoque', estoqueController.getItems.bind(estoqueController));
}

module.exports = setRoutes;