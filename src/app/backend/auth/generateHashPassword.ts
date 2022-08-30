import * as crypto from "crypto";

export default class GenerateCryptPassword {
  static setHashPassword(password: string) {
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("base64");
    return hashedPassword;
  }

  static compareHashPassword(password: string, oldPassword: string) {
    const hashedPassword = GenerateCryptPassword.setHashPassword(password);

    return hashedPassword === oldPassword;
  }
}
