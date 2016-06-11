import { gql } from "../../../util";
const schema = gql("./schema");
import resolvers from "./resolver";
import models from "./model";
import queries from "./queries";
// import mocks from "./mocks";

export default {
  schema,
  resolvers,
  models,
  queries,
  // mocks,
};
