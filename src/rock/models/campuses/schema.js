
export default [`
  type Location implements Node {
    id: ID!
    name: String
    street1: String
    street2: String
    city: String
    state: String
    country: String
    zip: String
    latitude: Float
    longitude: Float
    distance: Float
  }

  type Campus implements Node {
    id: ID!
    entityId: Int!
    name: String
    shortCode: String
    guid: String
    services: [String]
    url: String
    locationId: ID
    location: Location
  }
`];
