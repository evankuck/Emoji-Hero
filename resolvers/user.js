import models from '../models/index.js'

export const userResolvers = {
    Query: {
        me: async (root, args) => {
            console.log(args)
            return await models.User.findOne({ _id: args._id })
        },
        getUsers: async (root, args) => {
            console.log(args)
            return await models.User.find()
        }
    },
    Mutation: {
        createUser: async (root, args) => await models.User.create(args)
    }
}

