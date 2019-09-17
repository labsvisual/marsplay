const Sequelize = require( 'sequelize' );

const { Config } = require( '../../ancillary' );

const predicate = process.env.NODE_ENV || 'development';
const { username, password, database, ...options } =
    Config.get( `/persistence/postgres/${ predicate }` );

const sequelize = new Sequelize( database, username, password, { ...options, logging: false } );

module.exports = sequelize;
module.exports.bootstrapConnection = async function bootstrapConnection() {

    console.log( 'Connecting to PostgreSQL...' );

    try {

        await sequelize.authenticate();
        console.log( 'Connection successful.' );

    } catch ( error ) {

        console.log( '[FATAL] There was an error in initializing a connection to Postgres: %s', error );
        throw error;

    }

};
