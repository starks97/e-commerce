import { SummaryItems } from "../../components/checkout";
import { ShopLayout } from "../../components/layouts";
import { Navbar } from "../../components/navbar";

import { Product } from "@prisma/client";
import { useEffect, useState } from "react";

interface Props {
  product: Product;
}

export default function SummaryPage({ product }: Props) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <ShopLayout title="summary" pageDescription="Summary of your items">
          <>
            <Navbar />
            <SummaryItems product={product} />
          </>
        </ShopLayout>
      )}
    </>
  );
}
