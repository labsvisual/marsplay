const Listr = require( 'listr' );
const tasks = require( './lib' );

const taskList = new Listr( tasks );

module.exports = taskList;
