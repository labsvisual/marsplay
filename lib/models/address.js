const Sequelize = require( 'sequelize' );
const sequelize = require( './sequelize' );

class Address extends Sequelize.Model {}

Address.init( {

    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
    },

    userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    street: {
        allowNull: false,
        type: Sequelize.STRING,
    },

    suite: {
        allowNull: false,
        type: Sequelize.STRING,
    },

    city: {
        allowNull: false,
        type: Sequelize.STRING,
    },

    zipcode: {
        allowNull: false,
        type: Sequelize.STRING,
    },

    geoLat: {
        allowNull: false,
        type: Sequelize.STRING,
    },

    geoLong: {
        allowNull: false,
        type: Sequelize.STRING,
    },

}, {
    sequelize,
    modelName: 'address',
} );

module.exports = Address;
