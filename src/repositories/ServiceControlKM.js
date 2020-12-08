const controlKMModel = require("../models/ServiceControlKM.js");

/** Buscar Um Service por Id */

exports.findOneId = async (id) => {
  return await controlKMModel.findOne({ _id: id });
};

/** CREATE */
exports.create = async (body) => {
  return await controlKMModel.create(body);
};
/** READ */
exports.find = async () => {
  return await controlKMModel.find();
};
/** UPDATE */
exports.update = async (id, body) => {
  const {
    prefixo,
    kmEntrada,
    kmSaida,
    hPerSaida,
    hCarregamento,
    hFechamentoNF,
    hPerVolta,
    hDescarregamento,
    hFechamentoTicket,
  } = body;
  return await controlKMModel.findOneAndUpdate({ _id: id }, { 
    prefixo,
    kmEntrada,
    kmSaida,
    hPerSaida,
    hCarregamento,
    hFechamentoNF,
    hPerVolta,
    hDescarregamento,
    hFechamentoTicket,
   });
};
/** DELETE */
exports.delete = async (id) => {
  await controlKMModel.findOneAndDelete({ _id: id });
  return;
};
