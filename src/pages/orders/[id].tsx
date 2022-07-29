
import { ShopLayout } from "../../components/layouts";
import { FinaleOrderSummary } from "../../components/orders";

type Props = {};

export default function orderPage({}: Props) {
  return (
    <ShopLayout
      title="summary of purchase 123314355132"
      pageDescription="summary of purchase 123314355132"
    >
      <FinaleOrderSummary />
    </ShopLayout>
  );
}
