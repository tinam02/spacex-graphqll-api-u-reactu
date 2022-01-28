import {
  ApolloClient,
  InMemoryCache,

} from "@apollo/client";
import { GET_SPACE_MISSION } from "./queries";

export const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

class SpaceService {
  async getSpaceMission(limit = 10) {
    try {
      const response = await client.query({
        query: GET_SPACE_MISSION,
        variables: { limit },
      });

      if (!response || !response.data)
        throw new Error("Cannot get rocket launch list!");
      return response.data.launchesPast;
    } catch (err) {
      throw err;
    }
  }
}

export default new SpaceService();
