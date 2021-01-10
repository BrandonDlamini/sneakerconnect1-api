import {ApolloServer} from 'apollo-server-lambda';
import {resolvers} from './resolvers/index';
import {schema} from './schema';

const server = new ApolloServer({
    typeDefs: schema,
    resolvers:resolvers,
    playground: true,
    tracing: true,
    introspection: true,

});

exports.graphqlHandler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
        methods: ["POST", "GET"],
        allowedHeaders: ["content-Type", "Origin", "Accept"]
    },
});
