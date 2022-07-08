import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        _id: String!
        email: String!
        password: String!
        days: [Day]
    }

    type Day {
        _id: String!
        emoji: String!
        date: String!
        userId: String!
    }

    type Query {
        me(_id: String!): User
        getUsers: [User]
        getDaysByUserId(userId: String!): [Day]
    }

    type Mutation {
        createUser(email: String! password: String!): User
        createDay(emoji: String! date: String! userId: String!): Day
    }    
`