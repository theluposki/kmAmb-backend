const mongoose = require('../database')

const Schema = mongoose.Schema

const controlKMSchema = new Schema({
    motorista: {
        type: Object
    },
    hrEmitido: {
        type: String
    },
    dtEmitido: {
        type: String
    },
    prefixo: {
        type: String
    },
    kmEntrada: {
        type: String
    },
    kmSaida: {
        type: String
    },
    hPerSaida: {
        type: String
    },
    hCarregamento: {
        type: String
    },
    hFechamentoNF: {
        type: String
    },
    hPerVolta: {
        type: String
    },
    hDescarregamento: {
        type: String
    },
    hFechamentoTicket: {
        type: String
    },
})

const controlKM = mongoose.model('controlKM', controlKMSchema)

module.exports = controlKM