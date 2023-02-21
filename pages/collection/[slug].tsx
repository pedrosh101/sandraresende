import { serie } from "../../data/serie";
import Collection from "../../src/Collection";

const CollectionPage = () => {
  return <Collection description={serie[0].description} img={serie[0].image} />;
};

export default CollectionPage;
