import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import Card from "../../../components/core/Card";
import Col from "../../../components/core/Col";
import Container from "../../../components/core/Container";
import Empty from "../../../components/core/Empty";
import List from "../../../components/core/List";
import Navbar from "../../../components/core/Navbar";
import Row from "../../../components/core/Row";
import Title from "../../../components/core/Title";
import StarIcon from "../../../components/icons/StarIcon";
import {
  useFavorite,
  useDispatchFavorite,
} from "../../../components/providers/favorites";
import { LEVELS, LEVELS_MAP } from "../../../constants/levels";

const QuestionList = ({ favorites, questions, toggleFavorite, topic }) => {
  if (!questions || questions.length === 0) {
    return (
      <Empty
        hideIcon={true}
        headline="Coming soon!"
        description="In the meantime discover another topic."
      />
    );
  }

  return (
    <List>
      {questions.map((question, index) => {
        const bookmarked = favorites.find((b) => b.slug === question.slug);
        return (
          <List.Collapse
            actions={
              <StarIcon
                className={clsx(
                  "ml-2",
                  bookmarked ? "text-primary" : "text-gray"
                )}
                fill={bookmarked}
                onClick={toggleFavorite(
                  { ...question, topic: topic.label },
                  bookmarked
                )}
              />
            }
            bordered={true}
            key={question.slug}
            title={`${index + 1}. ${question.title}`}
          >
            <div
              className="small mb-4"
              dangerouslySetInnerHTML={{ __html: question.answer }}
            ></div>
          </List.Collapse>
        );
      })}
    </List>
  );
};

export default function QuestionPage({ questions, topic }) {
  const favorites = useFavorite();
  const dispatch = useDispatchFavorite();

  const toggleFavorite = (question, bookmarked) => (e) => {
    e.stopPropagation();
    if (bookmarked) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: question,
      });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: question,
      });
    }
  };

  return (
    <Container className="py-4">
      <Head>
        <meta
          name="description"
          content={`List of ${topic.label} interview questions and answers.`}
        />
        <title>{`${topic.label} questions · Tiqa`}</title>
      </Head>
      <Row reverse>
        <Col offset={1} size={4}>
          <div className="text-center mb-4">
            <img
              alt={`${topic.label} logo`}
              className="mb-3"
              src={topic.image}
              height="64"
              width="64"
            />
            <Title tag="h2" variant="h3">
              {topic.label}
            </Title>
          </div>
          <Card className="border-0 bg-light mb-5">
            <Card.Body>
              <Card.Text>
                Click on the star icon to add the question to your favorites.
                Found an issue?{" "}
                <a href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}>
                  Let us know.
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col size={7}>
          <QuestionList
            favorites={favorites}
            questions={questions}
            toggleFavorite={toggleFavorite}
            topic={topic}
          />
        </Col>
      </Row>
      {favorites && favorites.length > 0 && (
        <Navbar className="fixed-bottom w-100 border-top bg-white">
          <span className="bold">{`Favorites: ${favorites.length}`}</span>
          <Link href="/favorites" passHref>
            <a>See all</a>
          </Link>
        </Navbar>
      )}
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const topics = require("../../../data/topics.json");
  const allQuestions = require(`../../../data/${params.topic}.json`);
  const questions = allQuestions.filter((q) => q.level === +params.level);
  const topic = topics.find((t) => t.slug === params.topic);
  const tabs = LEVELS.map((level) => ({
    ...LEVELS_MAP[level],
    link: `/topics/${topic.slug}/${level}`,
  }));
  return {
    props: {
      activeTab: LEVELS_MAP[params.level].slug,
      back: "/topics",
      questions,
      tabs,
      title: "Questions",
      topic,
    },
  };
}

export async function getStaticPaths() {
  const topics = require("../../../data/topics.json");
  return {
    paths:
      topics.flatMap((topic) =>
        LEVELS.map((level) => `/topics/${topic.slug}/${level}`)
      ) || [],
    fallback: false,
  };
}
