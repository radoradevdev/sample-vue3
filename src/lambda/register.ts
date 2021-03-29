import { isValidEmail, isValidPass } from "../helpers/validators.helper";
import { APIGatewayProxyEvent } from "aws-lambda";
import { SERVERERROR, SUCCESS } from "./constants/response-codes.constant";
import { isValidRequestBody } from "./helpers/api.helper";
import { connect, disconnect } from "./helpers/db.helper";
import { User } from "./models/user.model";

export async function handler(event: APIGatewayProxyEvent) {
  if (event.httpMethod === 'POST' && isValidRequestBody(event.body)) {
    try {
      const { email, password } = JSON.parse(event.body!);
      if (!isValidEmail(email)) {
        throw new Error("Wrong email!");
      }
      if (!isValidPass(password)) {
        throw new Error("Wrong password!");
      }
      const db = await connect();
      const doesUserExist = await db.collection('users').findOne({email: {$eq: 'sdsds'}});
      if(doesUserExist === null)
        throw new Error('User with this email already exists');

      const user: User = { email: email, password: password };
      await db.collection('users').insertOne(user); // save the user
      return {
        statusCode: SUCCESS,
        body: JSON.stringify({})
      };
    } catch (e) {
      return {
        statusCode: SERVERERROR,
        body: JSON.stringify({message: e.message})
      };
    }
  } else {
    return {
      statusCode: SERVERERROR,
      body: JSON.stringify({ message: `Wrong request` })
    };
  }
}