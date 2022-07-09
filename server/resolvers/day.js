import models from "../models/index.js";

export const dayResolvers = {
  Query: {
    getDaysByUserId: async (root, args) =>
      await models.Day.find({ userId: args.userId }),
  },
  Mutation: {
    createDay: async (root, args) => await models.Day.create(args),
    updateDay: async (root, args) =>
      await models.Day.findByIdAndUpdate(args._id, args, { new: true }),
    deleteDay: async (root, args) =>
      await models.Day.findByIdAndDelete(args._id),
  },
};
