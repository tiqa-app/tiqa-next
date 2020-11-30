import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import Badge from "../components/core/Badge";
import Button from "../components/core/Button";
import ConfirmModal from "../components/core/ConfirmModal";
import Container from "../components/core/Container";
import Empty from "../components/core/Empty";
import List from "../components/core/List";
import Title from "../components/core/Title";
import CloseIcon from "../components/icons/CloseIcon";
import TrashIcon from "../components/icons/TrashIcon";
import {
  useFavorite,
  useDispatchFavorite,
} from "../components/providers/favorites";
import { LEVELS_MAP } from "../constants/levels";

function FavoritesList({ favorites, onRemove }) {
  const favoritesByTopic = useMemo(
    () =>
      favorites.reduce((acc, cV) => {
        acc[cV.topic] = acc[cV.topic] || [];
        acc[cV.topic].push(cV);
        return acc;
      }, {}),
    [favorites]
  );

  if (
    !Object.keys(favoritesByTopic) ||
    Object.keys(favoritesByTopic).length === 0
  ) {
    return (
      <Empty
        className="py-5"
        headline="No favorites added yet!"
        description="Choose a topic and add questions to your favorites."
      >
        <Link href="/topics" passHref>
          <Button className="mt-5" type="primary">
            Show topics
          </Button>
        </Link>
      </Empty>
    );
  }
  return Object.keys(favoritesByTopic).map((topicKey) => (
    <section className="mb-4" key={topicKey}>
      <Title variant="listtitle">{topicKey}</Title>
      <List>
        {favoritesByTopic[topicKey].map((favorite) => {
          return (
            <List.Collapse
              actions={
                <CloseIcon
                  className="text-gray ml-2"
                  onClick={onRemove(favorite)}
                />
              }
              bordered={true}
              key={favorite.slug}
              subtitle={`Level: ${LEVELS_MAP[favorite.level].label}`}
              title={favorite.title}
            >
              <div
                className="small mb-4"
                dangerouslySetInnerHTML={{ __html: favorite.answer }}
              ></div>
            </List.Collapse>
          );
        })}
      </List>
    </section>
  ));
}

function Favorites() {
  const favorites = useFavorite();
  const dispatch = useDispatchFavorite();

  const [showConfirmation, setShowConfirmation] = useState(undefined);

  const handleCloseConfirmation = () => setShowConfirmation(false);
  const handleShowConfirmation = () => setShowConfirmation(true);

  const clearFavorites = () => {
    dispatch({
      type: "CLEAR_FAVORITES",
    });
    setShowConfirmation(false);
  };

  const removeFavorite = (question) => (e) => {
    e.stopPropagation();
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: question,
    });
  };

  return (
    <Container>
      <Head>
        <meta name="description" content="List of favorite questions." />
        <title>Favorites · Tiqa</title>
      </Head>
      {favorites && favorites.length > 0 && (
        <div className="d-flex align-items-center justify-content-between mb-3 py-3">
          <Badge>{`Questions: ${favorites.length}`}</Badge>
          <Button
            className="px-0"
            icon={TrashIcon}
            onClick={handleShowConfirmation}
            size="sm"
            type="link"
          >
            Clear all
          </Button>
        </div>
      )}
      <FavoritesList favorites={favorites} onRemove={removeFavorite} />
      {showConfirmation !== undefined && (
        <ConfirmModal
          message="Clear all your favorites?"
          onClose={handleCloseConfirmation}
          onConfirm={clearFavorites}
          show={showConfirmation}
        />
      )}
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: { back: "/", title: "Favorites" },
  };
}

export default Favorites;
