//to use edge function you must to make sure the imports are very specific with the path.

import { NextResponse, NextRequest, NextFetchEvent } from "next/server";
import { Token } from "../../app/utils/token";

export async function middleware(req: NextRequest, even: NextFetchEvent) {
  const { Ecommerce_token = "" } = req.cookies;

  try {
    await Token.decoded(Ecommerce_token);

    return NextResponse.next();
  } catch (e) {
    const requestedPage = req.page.name;
    return NextResponse.redirect(
      new URL(`/auth/login?p=${requestedPage}`, req.url)
    );
  }
}
