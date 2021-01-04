const schema = `
"""
TYPE
"""

type Sneaker {
    id: ID!
    size: String!
    color: String!
    condition: String!
    Brand: String!
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
    getSneakersbyUser(userId: String!)[Sneaker!]!


}

"""
Mutation
"""

type Muation{
    addSneaker( size: String!, color: String!, condition: String!, brand: String!, postedBy: String!): Sneaker!
}
`