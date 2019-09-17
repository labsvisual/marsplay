module.exports = {
    up( queryInterface, Sequelize ) {

        return queryInterface.createTable( 'comments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            postId: {
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            body: {
                type: Sequelize.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Date.now(),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Date.now(),
            },
        } );

    },

    down( queryInterface ) {

        return queryInterface.dropTable( 'comments' );

    },

};
