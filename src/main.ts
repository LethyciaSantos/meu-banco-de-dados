import express from 'express';
import {db, firestore} from '../banco de dados/firebase';

const app = express(); 

app.get('/', (reg, res) => {
    res.send("bem vindo a minha primeira API");
})
app.post('/usuario',async (reg, res) => {
    const usuario = req.body.nome
    try{
        const docRef = await firestore.addDoc(firestore.collection(db, ususario),{
       nome: nome,     
        }) res.send(docRef.id)
    } catch (e) {
        console.log(e)
        res.status(500.send(e))
    }
})
app.listen(3000, function(){
    console.log("servidor rodando na porta http://localhost:3000")
});
