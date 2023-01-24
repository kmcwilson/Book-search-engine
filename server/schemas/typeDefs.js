const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID!
        username: String
        email: String
        bookCount: Int
        saveBooks: [Book]
    }

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
   type Query {
    me: User
   }

   type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input:savedBook!): User
    removeBook(bookId: ID!): User
   }
    

    input savedBook {
        bookId: String
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;