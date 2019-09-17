const path = require( 'path' );

const Umzug = require( 'umzug' );
const axios = require( 'axios' );

const sequelize = require( '../models/sequelize' );
const User = require( '../models/user' );
const Address = require( '../models/address' );
const Post = require( '../models/posts' );
const Comments = require( '../models/comments' );

module.exports = {

    async migrateTables( _, task ) {

        try {

            const umzug = new Umzug( {
                storage: 'sequelize',
                storageOptions: {
                    sequelize,
                },
                migrations: {
                    params: [ sequelize.getQueryInterface(), sequelize.Sequelize ],
                    path: path.join( __dirname, '../../ancillary/migrations' ),
                },
            } );

            await umzug.up();
            task.title = 'PostgreSQL migration complete.';

        } catch ( error ) {

            throw error;

        }

    },

    async fetchingUserData( ctx, task ) {

        try {

            const { data } = await axios.get( 'https://jsonplaceholder.typicode.com/users' );
            ctx.data = data;

            task.title = 'User data fetched successfully.';

        } catch ( error ) {

            throw error;

        }

    },

    async insertUserData( ctx, task ) {

        try {

            const insertData = async data => {

                try {

                    const { address, company, ...restData } = data;

                    address.geoLat = address.geo.lat;
                    address.geoLong = address.geo.lng;

                    delete address.geo;

                    await new User( { ...restData, companyName: company.name, companyBs: company.bs, companyCatchPhrase: company.catchPhrase } ).save();
                    await new Address( { userId: restData.id, ...address } ).save();

                } catch ( error ) {

                    throw error;

                }

            };

            const promises = ctx.data.map( insertData );
            await Promise.all( promises );

            task.title = 'Users inserted successfully.';

        } catch ( error ) {

            throw error;

        }

    },

    async fetchPostData( ctx, task ) {

        try {

            const { data } = await axios.get( 'https://jsonplaceholder.typicode.com/posts' );
            ctx.postData = data;

            task.title = 'Post data fetched successfully.';

        } catch ( error ) {

            throw error;

        }

    },

    async insertPostData( ctx, task ) {

        try {

            const insertData = async data => {

                try {

                    await new Post( data ).save();

                } catch ( error ) {

                    throw error;

                }

            };

            const promises = ctx.postData.map( insertData );
            await Promise.all( promises );

            task.title = 'Posts inserted successfully.';

        } catch ( error ) {

            throw error;

        }

    },

    async fetchCommentData( ctx, task ) {

        try {

            const { data } = await axios.get( 'https://jsonplaceholder.typicode.com/comments' );
            ctx.commentData = data;

            task.title = 'Comment data fetched successfully.';

        } catch ( error ) {

            throw error;

        }

    },

    async insertCommentData( ctx, task ) {

        try {

            const insertData = async data => {

                try {

                    await new Comments( data ).save();

                } catch ( error ) {

                    throw error;

                }

            };

            const promises = ctx.commentData.map( insertData );
            await Promise.all( promises );

            task.title = 'Comments inserted successfully.';

        } catch ( error ) {

            throw error;

        }

    },

};
