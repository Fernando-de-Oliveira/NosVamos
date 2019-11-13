const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    const Responsavel = sequelize.define('responsavel', {
        id_resp: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_resp: {
            type: DataTypes.String
        },
        foto_resp: {
            type: DataTypes.String
        },
        cpf_resp: {
            type: DataTypes.String
        },
        email_resp: {
            type: DataTypes.String
        },
        endereco_resp: {
            type: DataTypes.String
        },
        senha_resp: DataTypes.String,
        tel_resp: {
            type: DataTypes.String
        },
        tel2_resp: {
            type: DataTypes.String
        },
        hooks: {
            beforeCreate: async function(responsavel) {
                const salt = await bcrypt.genSalt(10); //whatever number you want
                responsavel.senha_resp = await bcrypt.hash(responsavel.senha_resp, salt);
            }
        },
    });
    Responsavel.prototype.validPassword = async function(senha_resp) {
        return await bcrypt.compare(senha_resp, this.senha_resp);
    }
    return Responsavel;
}