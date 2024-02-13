//Model configura tudo que é referente à dados e à base de dados

const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({ //define os campos que irão ser enviados e estarão presente na base de dados, informando também o tipo de dado que será guardado no campo informado: 
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {
    
}

module.exports = Home;