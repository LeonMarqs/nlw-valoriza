import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {

  // Receber o token
  const authToken = request.headers.authorization;
  
  // Validar se o token está preenchido
  if(!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" "); // Tirar o "Bearer" da string

  // Validar se o token é válido
  try {
    const { sub } = verify(token, process.env.JWT_TOKEN_VALIDATOR);

    // Recuperar informações do usuário
    request.user_id = sub.toString();

    return next();
  } catch(err) {
    return response.status(401).end();
  }
  
  
}