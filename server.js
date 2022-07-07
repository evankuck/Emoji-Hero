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