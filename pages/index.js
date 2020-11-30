import Head from "next/head";
import Link from "next/link";
import Card from "../components/core/Card";
import Container from "../components/core/Container";
import { HOME_MENU_ITEMS } from "../constants/navigation";

function Home() {
  return (
    <Container className="mw-720 mb-5">
      <Head>
        <meta
          name="description"
          content="Technical interview questions and answers."
        />
        <title>Tiqa · Technical interview questions and answers.</title>
      </Head>
      <header className="text-center mb-4 py-4">
        <img
          alt="Home illustration"
          src="/img/illustrations/undraw_questions.svg"
          height="130"
          width="185"
        />
      </header>
      {HOME_MENU_ITEMS.map((item) => (
        <Link href={item.path} key={item.path} passHref>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title tag="h2">{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Tiqa" },
  };
}

export default Home;
