import { APIGatewayProxyEvent } from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent, context: any) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello world ${Math.floor(Math.random() * 10)}` })
    };
  }