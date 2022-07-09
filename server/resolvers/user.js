import models from "../models/index.js";

export const userResolvers = {
  Query: {
    me: async (root, args) => {
      console.log(args);
      return await models.User.findOne({ token: args.token });
    },
    getUsers: async (root, args) => {
      console.log(args);
      return await models.User.find();
    },
  },
  Mutation: {
    createUser: async (root, args) => await models.User.create(args),
    login: async (root, args) => {
      try {
        const user = await models.User.findOne({ email: args.email });
        if (!user) {
          console.log("User not found");
        }
        if (user.password !== args.password) {
          console.log("Password is incorrect");
        }
        return user.token;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

//"y64benp8v0k4lxd5gqn9d"

// "_id": "62c8c1bd1bca0d3e92c328f0",
//       "email": "zparlmer@gmail.com",
//       "password": "zzz",
//       "token": "y64benp8v0k4lxd5gqn9d"