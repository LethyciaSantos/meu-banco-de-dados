import express from 'express';
import {db, firestore} from '../banco de dados/firebase';

const app = express(); 

app.listen(3000, function(){
    console.log("servidor rodando na porta http://localhost:3000")
});
