import type { NextPage } from "next";

import { ShopLayout } from "../components/layouts";
import { Navbar } from "../components/navbar";

const Home: NextPage = () => {
  return (
    <ShopLayout title="Teslo | Shop" pageDescription="Welcome our shop">
      <Navbar />
      <h1>Hello Teslo Shop</h1>
    </ShopLayout>
  );
};

export default Home;
