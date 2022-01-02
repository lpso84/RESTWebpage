const router = require("express").Router();
const mysql = require('mysql');
const db = require('./database');

// router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
router.get("/", (req, res) => { res.sendFile(__dirname + "/index.html"); });

router.get('/clientes', (req, res) => {
    db.execSQLQuery('SELECT * FROM Clientes', res);
})

router.get('/clientes/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    db.execSQLQuery('SELECT * FROM Clientes' + filter, res);
})

router.delete('/clientes/:id', (req, res) => {
    db.execSQLQuery('DELETE FROM Clientes WHERE ID=' + parseInt(req.params.id), res);
})

router.post('/clientes', (req, res) => {
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    db.execSQLQuery(`INSERT INTO Clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
})

router.patch('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    db.execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
})

module.exports = router;