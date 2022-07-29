import type { NextPage } from "next";

import { TrackerTitle, CategoryLinks } from "../../components/ui";

const WomenPage: NextPage = () => {
  return <TrackerTitle url={CategoryLinks.WOMEN} Tpages={"Women Products"} />;
};

export default WomenPage;
