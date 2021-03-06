import * as dynamodbLib from '../../libs/dynamodb-lib';

export const test = (args,context) => {
    return "your graphql Server is live ";
};

export const getAllSneakers = async (args, context) => {
    const params ={
        TableName: process.env.tableName,
    };

    try {
        const result = await dynamodbLib.call("scan", params);
        return result.Items;
    }

    catch (e){
        console.log(e);
    }
};

export const getSneakersbyBrand = async (args, context) => {
    const params = {
        TableName: process.env.tableName,
        FilterExpression: "#brand = :comparedBrand",
        ExpressionAttributeNames:{"#brand": "brand"},
        ExpressionAttributeValues: {':comparedBrand' : args.brand},
};

    try {
        const result = await dynamodbLib.call("scan",params);
        return result.Items;
    }

    catch(e){
        console.log(e);
    }
};

