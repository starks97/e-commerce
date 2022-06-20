


import {SummaryItems} from '../../components/checkout'
import { ShopLayout } from '../../components/layouts'
import { Navbar } from '../../components/navbar'

type Props = {}

export default function summaryPage({}: Props) {
  return (
    <ShopLayout title="summary" pageDescription="Summary of your items">
      <Navbar />
      <SummaryItems/>
    </ShopLayout>
  )
}