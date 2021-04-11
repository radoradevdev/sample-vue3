import { isValidEmail } from "../helpers/validators.helper";
import { APIGatewayProxyEvent } from "aws-lambda";
import * as jwt from "jsonwebtoken";
import { SERVERERROR, SUCCESS } from "./constants/response-codes.constant";
import { isValidRequestBody } from "./helpers/api.helper";
import { connect } from "./helpers/db.helper";
import { isTokenValid } from "./helpers/auth.helper";

const bcrypt = require('bcryptjs');

export async function handler(event: APIGatewayProxyEvent, _: any) {
  if (event.httpMethod === 'POST' && isValidRequestBody(event.body)) {
    try {
      if(isTokenValid(event.headers.Authorization) === true) {
        throw new Error('You are already logged in!');
      }
      const { email, password } = JSON.parse(event.body!);

      if (!isValidEmail(email)) {
        throw new Error("Wrong email!");
      }
      const db = await connect();
      const user = await db.collection('users').findOne({ email: { $eq: email } });
      if(!user)
        throw new Error("There is no matching user!");

      let isSame = await bcrypt.compare(password, user.password);
      if (isSame && process.env.VUE_APP_JWT_SECRET) {
        const token = jwt.sign(user, process.env.VUE_APP_JWT_SECRET, { expiresIn: '4h' });
        return {
          body: JSON.stringify({token}),
          statusCode: SUCCESS
        };
      } else {
        throw new Error("There is no matching user!");
      }
    } catch(e) {
      return {
        statusCode: SERVERERROR,
        body: JSON.stringify({ message: e.message })
      };
    }
  } else {
    return {
      statusCode: SERVERERROR,
      body: JSON.stringify({ message: `Wrong request` })
    };
  }
}