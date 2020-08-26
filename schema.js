const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

// Product Type

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    brand: { type: GraphQLString },
    type: { type: GraphQLString },
    image: { type: GraphQLString },
    price: { type: GraphQLString },
    size: { type: GraphQLString },
    rating: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return axios
          .get(
            "https://raw.githubusercontent.com/Flaconi/coding-challenges/master/frontend-engineer/resources/productlist.json"
          )
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
