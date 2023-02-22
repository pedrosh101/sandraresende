import { useRouter } from "next/router";
import { serie } from "../../data/serie";
import Collection from "../../src/Collection";

const CollectionPage = () => {
  const router = useRouter();
  const collectionId = router.query.slug;
  const currentCollection = serie.find((serie) => serie.id === collectionId);

  return currentCollection ? (
    <Collection
      description={currentCollection.description}
      img={currentCollection.image}
    />
  ) : (
    <div>There is no serie with {collectionId}</div>
  );
};

export default CollectionPage;
