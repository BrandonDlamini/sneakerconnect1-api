import * as dynamodbLib from '../../libs/dynamodb-lib';
import * as uuid from "uuid";

export const addSneaker = async(args,context) => {
    const params = {
        TableName : process.env.tableName,
        Item: {
            userid: uuid.v1(),
            sneakerid: uuid.v1(),
            size: args.size,
            color: args.color,
            condition: args.condition,
            brand: args.brand,
            imageUrl: args.imageUrl,
            postedBy: args.postedBy
        }
    };

    try {
        await dynamodbLib.call("put", params)

        return {
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
    }
}

