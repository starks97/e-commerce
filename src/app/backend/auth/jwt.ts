import jwt, { JwtPayload } from "jsonwebtoken";

if (!process.env.JSON_WEB_TOKEN_KEY) {
  console.error("JSON_WEB_TOKEN_KEY is not set");
  process.exit(1);
}

export default class GenerateJWT {
  constructor(public id: string, public email: string) {}

  public generateJWT(): string {
    return jwt.sign(
      { id: this.id, username: this.email },
      process.env.JSON_WEB_TOKEN_KEY as string,
      { expiresIn: "30d" }
    );
  }

  static async decoded(token: string): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        jwt.verify(
          token,
          process.env.JSON_WEB_TOKEN_KEY as string,
          (err, payload) => {
            if (err) reject(err);

            const { id } = payload as { id: string };

            resolve(id);
          }
        );
      } catch (err) {
        return reject(err);
      }
    });
  }
}
