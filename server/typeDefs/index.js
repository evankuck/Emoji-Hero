import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        _id: String
        email: String
        password: String
    }

    type Query {
        me(_id: String!): User
        getUsers: [User]
    }

    type Mutation {
        createUser(email: String! password: String!): User
    }
`