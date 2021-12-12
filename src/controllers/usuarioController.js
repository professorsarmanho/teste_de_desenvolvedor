const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Inserir um novo documento na coleção USERS do squema teste_de_desenvolvedor
router.post('/insere', async (req,res) => {
    const { id } = req.body;
    try {
        if (await User.findOne({ id }))
           return res.status(400).send({ erro: 'usuário já existe!'});
        } catch (err) {
            const user = await User.create(req.body);
            return res.status(400).send({erro: 'usuário casastrado com sucesso!'});
    }
});

//Cria a rota do tipo PUT para editar
router.put("/altera/:id", (req, res) => {
	//Realizar alteração no banco de dados utilizando updateOne
	//Receber o nome do usuário a ser editado: req.params.id
	//Receber as insformações a serem editadas no banco de dados: req.body
    const artigo = User.updateOne({ id: req.params.id}, req.body, (err) => {
		//Retornar erro quando não conseguir editar com sucesso
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Usuário não alterado com sucesso!"
        });

		//Retornar sucesso quando o o usuário foi editado com sucesso
        return res.json({
            error: false,
            message: "Usuário alterado com sucesso!"
        });
    });
});

// Excluir um documento na coleção USERS do schema teste_de_desenvolvedor
router.delete("/exclui/:id", function(req,res){
 	//Apagar o registro no banco de dados MongoDB
     const user = User.deleteOne({id: req.params.id}, (err) => {
		//Retornar erro quando não conseguir apagar no banco de dados
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Usuário não foi excluído com sucesso!"
        });
		//Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
        return res.json({
            error: false,
            message: "Usuário excluído com sucesso!"
        });
    });
 });

// Listar os dados dos usuários
router.get("/listar", (req, res) => {
	//Buscar no banco de dados todos os usuários usando o find
   User.find({}).then((user) => {
	   //retornar os usuários para o aplicativo que fez a requisição
        return res.json(user);
    }).catch((erro) => {
		//Retornar erro ao aplicativo que fez a requisição informando que não encontrou nenhum usuário
        return res.status(400).json({
            error: true,
            message: "Nenhum usuário encontrado!"
        })
    })
});
 
module.exports = app => app.use('/usuario', router);
