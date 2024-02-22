import express from 'express';
import { db, firestore } from '../banco de dados/firebase';
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}))

app.get('/', (reg, res) => {
    res.send("bem vindo a minha primeira API");
})
app.post('/formulario', async (req, res) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const descricao = req.body.descricao;
    try {
        const docRef = await firestore.addDoc(firestore.collection(db, "formulario"), 
        {
            nome: nome, 
            email: email,
            telefone: telefone, 
            descricao: descricao, 
        }) 
        res.send("Resposta enviada com sucesso:" + docRef.id);
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

app.get('/listarFormulario', async (req, res) =>{

    const formulario = await firestore.getDocs(firestore.collection(db, 'formulario'))

    const FormularioLista = formulario.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) 
    res.send(FormularioLista)
    try {
        
    } catch (e) {
        console.log("Erro  ao listar formulario: " + e )
        
    }
   })

app.put('/atualizarformulario/:id', async (req, res)=>{
    const id =  req.params.id
    const nome = req.body.nome

    try {
        await firestore.updateDoc(firestore.doc(db, 'formulario', id),{
            nome: nome, 
        })
        res.send( 'Formulario atualizado com sucesso!')
    
    } catch (e) {
       console.log('Erro ao atualizar formulario:' + e)
       
       res.status(500).send('Erro ao atualizar formulario: ' + e )
    }
})

app.delete('/deletarformularioo/:id', async(req, res) => {
   const id = req.params.id
   
   try {
    await firestore.deleteDoc(firestore.doc(db, 'formulario', id))
res.send('formulario deletado com sucesso!')
   } catch (e) {
    console.log('Erro ao deletar Formulario: '+ e)
    res.status (500).send('Erro ao deletar Formulario: '+ e)
   }
})

app.listen(3000, function () {
    console.log("servidor rodando na porta http://localhost:3000")
});

