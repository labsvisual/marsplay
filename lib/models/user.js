const Sequelize = require( 'sequelize' );
const sequelize = require( './sequelize' );

const Address = require( './address' );
const Posts = require( './posts' );

class User extends Sequelize.Model {}

User.init( {

    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
    },

    name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            min: 4,
            max: 20,
        },
    },

    username: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            min: 4,
            max: 20,
        },
    },

    email: {
        allowNull: false,
        unique: 'ck_index',
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            min: 5,
            max: 30,
        },
    },

    phone: {
        allowNull: false,
        unique: 'phone_index',
        type: Sequelize.STRING,
    },

    website: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            isUrl: true,
            min: 4,
            max: 40,
        },
    },

    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
    },

    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
    },

}, {
    sequelize,
    modelName: 'user',
} );

User.hasOne( Address, { foreignKey: 'userId', sourceKey: 'id' } );
User.hasMany( Posts, { foreignKey: 'userId', sourceKey: 'id' } );

module.exports = User;
