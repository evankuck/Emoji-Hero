import models from '../models/index.js'

export const dayResolvers = {
    Query: {
        getDaysByUserId: async (root, args) => await models.Day.find({ userId: args.userId })
    },
    Mutation: {
        createDay: async (root, args) => await models.Day.create(args)
    }
}

