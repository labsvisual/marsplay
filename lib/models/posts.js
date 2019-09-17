const Sequelize = require( 'sequelize' );
const sequelize = require( './sequelize' );

const Comments = require( './comments' );

class Posts extends Sequelize.Model {}

Posts.init( {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    body: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'posts',
} );

Posts.hasMany( Comments, { foreignKey: 'postId', sourceKey: 'id' } );

module.exports = Posts;
