module.exports = {
    up( queryInterface, Sequelize ) {

        return queryInterface.createTable( 'addresses', {
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
                type: Sequelize.STRING,
            },
            suite: {
                type: Sequelize.STRING,
            },
            city: {
                type: Sequelize.STRING,
            },
            zipcode: {
                type: Sequelize.STRING,
            },
            geoLat: {
                type: Sequelize.STRING,
            },
            geoLong: {
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

        return queryInterface.dropTable( 'addresses' );

    },
};
