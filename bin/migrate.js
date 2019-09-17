#! /usr/bin/env node

const listr = require( '../index' ); // eslint-disable-line unicorn/import-index

listr.run().then( () => {

    process.exit( 0 );

} ).catch( error => {

    console.error( error );
    process.exit( 1 );

} );
