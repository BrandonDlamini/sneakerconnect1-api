import * as dynamodbLib from '../../libs/dynamodb-lib';
import * as uuid from "uuid";

export const addSneaker = async(args,context) => {
    const params = {
        TableName : process.env.tableName,
        Item: {
            userid: context.event.requestContext.authorizer.claims.sub,
            sneakerid: uuid.v1(),
            sneakerName: args.sneakerName,
            size: args.size,
            color: args.color,
            condition: args.condition,
            brand: args.brand,
            imageUrl: args.imageUrl,
            postedBy: args.postedBy
        }
    };

    try {
        await dynamodbLib.call("put", params);

        return {
            sneakerName: args.sneakerName,
            size: args.size,
            color: args.color,
            condition: args.condition,
            brand: args.brand,
            postedBy: args.postedBy,
            imageUrl: args.imageUrl,
            sneakerid: uuid.v1()
        };
    }

    catch (e){
        console.log(e);
    };
};

