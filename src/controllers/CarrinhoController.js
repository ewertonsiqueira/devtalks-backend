const fs = require('fs');
const path = require('path');

class CarrinhoController {
    getItems(req, res) {
        fetch('http://localhost:3001/carrinho')
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

    addItem(req, res) {
        fetch('http://localhost:3001/carrinho', {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                res.status(201).json({
                    message: 'Item added',
                    item: data
                });
            })
            .catch(_ => {
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    }

    removeItem (req, res) {
        fetch(`http://localhost:3001/carrinho/${req.params.id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                res.status(200).json({
                    message: 'Item removed',
                    item: data
                });
            })
            .catch(_ => {
                res.status(500).json({
                    message: 'Internal server error'
                });
            });
    }

    deleteAllItems(req, res) {
        const dbPath = path.join(__dirname, '../../db.json');
        
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if (err) {
                console.log({err})
                return res.status(500).json({ message: 'Internal server error' });

            }

            const db = JSON.parse(data);
            db.carrinho = [];

            fs.writeFile(dbPath, JSON.stringify(db, null, 2), 'utf8', (err) => {
                if (err) {
                    console.log({err})
                    return res.status(500).json({ message: 'Internal server error' });
                }

                res.status(200).json({ message: 'All items removed' });
            });
        });
    }
}

module.exports = CarrinhoController;