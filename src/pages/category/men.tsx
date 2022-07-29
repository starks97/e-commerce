import type { NextPage } from "next";

import { CategoryLinks, TrackerTitle } from "../../components/ui";

const MenPage: NextPage = () => {
  return <TrackerTitle url={CategoryLinks.MEN} Tpages={"Men Products"} />;
};

export default MenPage;
