import React from "react";
import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";
import { DataGrid } from "../../components/orders";

type Props = {};

export default function historyPage({}: Props) {
  return (
    <ShopLayout title="Order Hsitory" pageDescription="Order Hsitory">
      <Navbar />
      <DataGrid/>
    </ShopLayout>
  );
}
