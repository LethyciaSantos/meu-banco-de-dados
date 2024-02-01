import express from 'express';
import { db, firestore } from '../banco de dados/firebase';

const app = express();

app.use(express.json())

app.get('/', (reg, res) => {
    res.send("bem vindo a minha primeira API");
})
app.post('/usuario', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email
    const telefone = req.body.telefone
    try {
        const docRef = await firestore.addDoc(firestore.collection(db, "usuarios"), 
        {
            nome: nome, 
            email: email,
            telefone: telefone, 
        }) 
        res.send("Usuario adicionado com sucesso:" + docRef.id);
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})
app.listen(3000, function () {
    console.log("servidor rodando na porta http://localhost:3000")
});
