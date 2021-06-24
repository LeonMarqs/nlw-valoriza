import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string,
  password: string,
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    
    // Verificar se e-mail existe
    const user = await usersRepositories.findOne({
      email
    });

    if(!user) {
      throw new Error("Email and/or Password incorrect(s)");
    }

    // Verificar se senha está correta
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Email and/or Password incorrect(s)");
    }

    // Gerar token
    const token = sign(
      {
      email: user.email
      },
      process.env.JWT_TOKEN_VALIDATOR, {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };