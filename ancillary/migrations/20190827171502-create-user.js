module.exports = {
    up( queryInterface, Sequelize ) {

        return queryInterface.createTable( 'users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            username: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
            },
            website: {
                type: Sequelize.STRING,
            },
            companyName: {
                type: Sequelize.STRING,
            },
            companyCatchPhrase: {
                type: Sequelize.STRING,
            },
            companyBs: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        } );

    },

    down( queryInterface ) {

        return queryInterface.dropTable( 'users' );

    },
};
