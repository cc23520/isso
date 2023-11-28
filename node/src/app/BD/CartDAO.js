
const pool = require('../../config/database');

class CartDAO {
    async adicionarItem(req, res) {
        console.log('Recebendo solicitação para adicionar item:', req.body);

        const { nomeDoItem, descricao, preco, quantidade } = req.body;

        const item = {
            nomeDoItem: nomeDoItem.escape(),
            descricao,
            preco: Number(preco),
            quantidade: Number(quantidade),
        };

        console.log('Item a ser adicionado:', item);

        const itemExistente = await this.cartDAO.buscarItemPeloNome(nomeDoItem);

        if (itemExistente) {
            throw new Error('O item já existe no carrinho.');
        }

        try {
            await this.cartDAO.adicionarItem(item);
            res.status(200).json({ message: 'Item adicionado ao carrinho com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao adicionar item ao carrinho.' });
        }
    }
}

module.exports = CartDAO;

