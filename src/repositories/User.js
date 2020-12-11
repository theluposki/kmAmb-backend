const User = require("../models/User.js");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

const generateToken = async (id, nome, email , roles) => {
  const token = await jwt.sign({ 
    id,
    nome,
    email,
    roles 
  }, authConfig.secret, {
    expiresIn: 86400,
  });
  return token;
};

const findEmailPassword = async (email) => {
  return await User.findOne({ email }).select("+password");
};

/** Buscar Usuário por Email */

exports.findEmail = async (email) => {
  return await User.findOne({ email });
};

/** Criar Usuário */

exports.register = async (body) => {
  return await User.create(body);
};

/** Autenticar Usuário */
exports.auth = async (email, password) => {
  const user = await findEmailPassword(email);

  if (!user) {
    return { error: "Usuario não existe." };
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return { error: "Senha inválida." };
  }

  //user.password = undefined

  return { user, token: await generateToken(user.id, user.nome, user.email, user.roles) };
};

/** Buscar Todos Usuários */

exports.find = async () => {
  return await User.find();
};

/** Buscar Um Usuários por Id */

exports.findOneId = async (id) => {
  return await User.findOne({ _id: id });
};

/** Atualizar Usuário > [ nome, cnh, vencimentoCnh, matricula ] */

exports.update = async (id, body) => {
  const { nome, cnh, vencimentoCnh, matricula, email, roles } = body

  return await User.findOneAndUpdate(
    { _id: id },
    { 
        nome: nome,
        cnh: cnh,
        vencimentoCnh: vencimentoCnh,
        matricula: matricula,
        email: email,
        roles: roles
    }
  );
};

exports.delete = async (id) => {
    await User.findOneAndDelete({ _id: id })
    return
}
