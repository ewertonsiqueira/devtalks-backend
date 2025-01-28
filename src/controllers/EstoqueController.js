class EstoqueController {
    getItems(req, res) {
        fetch('http://localhost:3001/estoque')
            .then(response => response.json())
            .then(data => {
                res.status(200).json({
                    items: data
                });
            })
            .catch(_ => {
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    }
}

module.exports = EstoqueController;