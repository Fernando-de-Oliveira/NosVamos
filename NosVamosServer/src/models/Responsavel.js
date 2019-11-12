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
                    beforeCreate: (responsavel) => {
                        const salt = bcrypt.genSaltSync();
                        responsavel.senha_resp = bcrypt.hashSync(responsavel.senha_resp, salt);
                    }
                },
                {
                    freezeTableName: true,
                    instanceMethods: {
                        generateHash(senha_resp) {
                            return bcrypt.hash(senha_resp, bcrypt.genSaltSync(8));
                        },
                        validPassword(senha_resp) {
                            return bcrypt.compare(senha_resp, this.senha_resp);
                        }
                    }
                });
            return Responsavel;
        }