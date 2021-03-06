'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class merchant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    merchant.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            mobile: DataTypes.INTEGER,
            address: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'merchant',
        }
    );
    return merchant;
};
