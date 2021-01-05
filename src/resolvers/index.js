import {test, getAllSneakers, getSneakersbyBrand} from './Query';
import {addSneaker} from './Query';

export const resolvers ={
    Query: {
        test: (root,args,context) => test(args,context),
        getAllSneakers: (root, args, context) => getAllSneakers(args, context),
        getSneakersbyBrand: (root, args, context) => getSneakersbyBrand(args, context),
    },

    Mutation: {
        addSneaker: (root,args,context) => addSneaker(args, context)
    }
}
