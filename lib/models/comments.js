const Sequelize = require( 'sequelize' );
const sequelize = require( './sequelize' );

class Comments extends Sequelize.Model {}

Comments.init( {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    body: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'comments',
} );

module.exports = Comments;
