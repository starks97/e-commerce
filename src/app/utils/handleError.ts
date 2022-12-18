import { Prisma } from "@prisma/client";

/*export enum ErrorCodes {
  AUTHENTICATION_FAILED = "P1000",
  DATA_NOT_EXIST = "P1003",
  DATA_ALREADY_EXIST = "P1009",
}*/

const ErrorCodes: string[] = ["P1000", "P1003", "P1009"];

export type ErrorCodesType =
  | Prisma.PrismaClientKnownRequestError
  | Prisma.PrismaClientUnknownRequestError;

export class PrismaHandleException {
  static async handleError(error: ErrorCodesType) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      ErrorCodes.includes(error.code);

      if (ErrorCodes.includes(error.code)) {
        return console.log(
          `${JSON.stringify(error.name)}, ${JSON.stringify(error.message)}`
        );
      }

      return;
    }
  }
}
