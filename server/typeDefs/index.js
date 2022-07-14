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
        text: String
    }

    type Query {
        me(token: String!): User
        getUsers: [User]
        getDaysByUserId(userId: String!): [Day]
    }

    type Mutation {
        createUser(email: String! password: String!): User
        login(email: String! password: String!): String
<<<<<<< HEAD
        createDay(emoji: String! date: String! userId: String!): Day
        updateDay(_id: String! emoji: String): Day
=======
        createDay(emoji: String! date: String! userId: String! text: String!): Day
        updateDay(_id: String! emoji: String date: String): Day
>>>>>>> feature/text-input
        deleteDay(_id: String!): Day
    }    
`;
