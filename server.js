// this is our server file
// this will be our express server
import express from 'express'
import connection from './connection/index.js'


// apollo graphql server (graphql/apollo)
// set up typeDefs (graphql/apollo)
// set up resolvers for all matching typeDefs (graphql/apollo)
// set up models for our database (mongoose)
// set up the actual database connection (mongoose)
// make middleware for certain use cases/ie debugging (express middleware (app.use(middleware)))

import { ApolloServer } from 'apollo-server-express'
import { resolvers } from './resolvers/index.js'
import { typeDefs } from './typeDefs/index.js'
const PORT = 3001
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//     {
//         title: 'The Awakening',
//         author: 'Kate Chopin',
//     },
//     {
//         title: 'City of Glass',
//         author: 'Paul Auster',
//     },
// ];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
// const resolvers = {
//     Query: {
//         books: () => books,
//     },
// };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({
    typeDefs,
    resolvers
})
await server.start()

server.applyMiddleware({ app })
if (connection) {
    app.listen(PORT, () => {
        console.log("listening on port " + PORT)
    })
}