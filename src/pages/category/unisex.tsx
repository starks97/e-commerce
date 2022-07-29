import type { NextPage } from "next";

import { CategoryLinks, TrackerTitle } from "../../components/ui";

const UnisexPage: NextPage = () => {
  return <TrackerTitle url={CategoryLinks.UNISEX} Tpages={"Unisex Products"} />;
};

export default UnisexPage;
