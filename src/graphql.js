import {ApolloServer} from 'apollo-server-lambda';
import {resolvers} from './resolvers/index';
import {schema} from './schema';

const server = new ApolloServer({
    typeDefs: schema,
    resolvers:resolvers,
    playground: true,
    tracing: true,
    introspection: true,
    formatError: (error) => {
        return error;
      },
      formatResponse: (response) => {
        return response;
      },
      context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
      }),

});

exports.graphqlHandler = (event, context, callback) => {
    const handler = server.createHandler({
        cors: {
            origin: "*",
            credentials:true,
            methods:["POST","GET"],
            allowedHeaders: ["Content-Type", "Origin", "Accept"]
        }
    });
    return handler(event, context, callback);
};


