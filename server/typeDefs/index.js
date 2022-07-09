import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        _id: String!
        email: String!
        password: String!
        days: [Day]
        token: String
    }

    type Day {
        _id: String!
        emoji: String!
        date: String!
        userId: String!
    }

    type Query {
        me(token: String!): User
        getUsers: [User]
        getDaysByUserId(userId: String!): [Day]
    }

    type Mutation {
        createUser(email: String! password: String!): User
        login(email: String! password: String!): String
        createDay(emoji: String! date: String! userId: String!): Day
        updateDay(_id: String! emoji: String date: String): Day
        deleteDay(_id: String!): Day
    }    
`;
