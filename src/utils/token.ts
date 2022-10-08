import * as jose from 'jose'

if (!process.env.JSON_WEB_TOKEN_KEY) {
  console.error("JSON_WEB_TOKEN_KEY is not set");
  process.exit(1);
}

export class Token {
  constructor(public id: string, public email: string) {}

  public async  generateJWT(): Promise<string> {
    return await new jose.SignJWT({
      id: this.id,
      email: this.email,
    })
      .setExpirationTime("30d")
      .setProtectedHeader({ alg: "HS256" })
      .sign(new TextEncoder().encode(process.env.JSON_WEB_TOKEN_KEY));
  }

  static async decoded(token: string): Promise<string>{
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(process.env.JSON_WEB_TOKEN_KEY)
    );
    return payload.id as string;
  }
}

