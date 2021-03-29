import { isValidEmail, isValidPass } from "../helpers/validators.helper";
import { APIGatewayProxyEvent } from "aws-lambda";
import * as jwt from "jsonwebtoken";
import { SERVERERROR, SUCCESS } from "./constants/response-codes.constant";
import { isValidRequestBody } from "./helpers/api.helper";

export async function handler(event: APIGatewayProxyEvent, _: any) {
  if(event.httpMethod === 'POST' && isValidRequestBody(event.body)) {
    const body = JSON.parse(event.body!);
    let errors: string[] = [];
    if(!isValidEmail(body.email)) {
      errors.push("Wrong email!");
    }
    if(!isValidPass(body.password)) {
      errors.push("Wrong password!");
    }
    if(errors.length == 0){
      return {
        statusCode: SUCCESS
      };
    }else {
      return {
        statusCode: SERVERERROR
      };
    }
  } else {
    return {
      statusCode: SERVERERROR,
      body: JSON.stringify({ message: `Wrong request` })
    };
  }
}