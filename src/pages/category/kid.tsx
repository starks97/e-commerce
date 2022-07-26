import type { NextPage } from "next";

import { TrackerTitle, CategoryLinks } from "../../components/ui";

const KidPage: NextPage = () => {
  return <TrackerTitle url={CategoryLinks.KID} Tpages={"Kids Products"} />;
};

export default KidPage;
