"use strict";
const Sequelize = require('sequelize');
const db = require('../database');
const Responsavel = db.define('responsavel', {
    id_resp: {
        type: Sequelize.INTEGER
    },
    nome_resp: {
        type: Sequelize.String
    },
    foto_resp: {
        type: Sequelize.String
    },
    cpf_resp: {
        type: Sequelize.String
    },
    endereco_resp: {
        type: Sequelize.String
    },
    senha_resp: {
        type: Sequelize.String
    },
    tel_resp: {
        type: Sequelize.String
    },
    tel2_resp: {
        type: Sequelize.String
    }
});
module.exports = Responsavel;
