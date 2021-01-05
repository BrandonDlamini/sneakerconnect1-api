const schema = `
"""
TYPE
"""

type Sneaker {
    snekaerid: ID!
    userid: ID!
    size: String!
    color: String!
    condition: String!
    brand: Brand!
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
    getSneakersbyBrand(Brand: String!):[Sneaker]
}

"""
Mutation
"""

type Muation{
    addSneaker( size: String!, color: String!, condition: String!, brand: String!, postedBy: String!, imageUrl: String!): Sneaker!
}
`