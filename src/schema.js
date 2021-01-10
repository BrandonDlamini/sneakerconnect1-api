const schema = `
"""
TYPE
"""

type Sneaker {
    sneakerid: ID!
    sneakerName: String!
    userid: ID!
    size: String!
    color: String!
    condition: String!
    brand: String!
    imageUrl: String!
    postedBy: String!
}

type Brand {
    name: String!
    sneakers: [Sneaker]
}


"""
Query
"""

type Query {
    test: String!
    getAllSneakers: [Sneaker!]
    getSneakersbyBrand(brand: String!):[Sneaker]
}

"""
Mutation
"""

type Mutation{
    addSneaker( sneakerName: String!, size: String!, color: String!, condition: String!, brand: String!, postedBy: String!, imageUrl: String!): Sneaker!
}
`;
export {schema};