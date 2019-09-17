const Controller = require( './controller' );

module.exports = [

    {
        title: 'Create PostgreSQL tables...',
        task: Controller.migrateTables,
    },

    {
        title: 'Fetching user data...',
        task: Controller.fetchingUserData,
    },

    {
        title: 'Inserting user data...',
        task: Controller.insertUserData,
    },

    {
        title: 'Fetching post data...',
        task: Controller.fetchPostData,
    },

    {
        title: 'Inserting post data...',
        task: Controller.insertPostData,
    },

    {
        title: 'Fetching comment data...',
        task: Controller.fetchCommentData,
    },

    {
        title: 'Inserting comment data...',
        task: Controller.insertCommentData,
    },

];
