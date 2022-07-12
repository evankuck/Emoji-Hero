import models from "../models/index.js";

export const dayResolvers = {
  Query: {
    getDaysByUserId: async (root, args) =>
      await models.Day.find({ userId: args.userId }),
  },
  Mutation: {
    createDay: async (root, args) => await models.Day.create(args),
    updateDay: async (root, args) => {
      try {
        const day = await models.Day.findByIdAndUpdate(args._id, args, {
          new: true,
        });
        console.log({ day });
        return day;
      } catch (error) {
        console.log({ error });
        throw new Error(error);
      }
    },
    deleteDay: async (root, args) => {
      await models.Day.findByIdAndDelete(args._id);
    },
  },
};
