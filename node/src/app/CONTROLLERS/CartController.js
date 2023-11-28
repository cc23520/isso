const CartDAO = require('..\BD\CartDAO');

class CartController {
    constructor() {
        this.cartDAO = new CartDAO();
    }

    async adicionarItem(req, res, nome) {
        console.log('Recebendo solicitação para adicionar item:', req.body);
    
        const { nome, descricao, preco, quantidade } = req.body; 
    
        const item = {
            nome,
            descricao,
            preco: Number(preco), 
            quantidade: Number(quantidade), 
        };
    
        console.log('Item a ser adicionado:', item);
    
        try {
            await this.cartDAO.adicionarItem(item);
            res.status(200).json({ message: 'Item adicionado ao carrinho com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao adicionar item ao carrinho.' });
        }
    }

    // Adicione outros métodos conforme necessário
}

module.exports = CartController;