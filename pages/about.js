import Head from "next/head";
import Link from "next/link";
import Card from "../components/core/Card";
import Container from "../components/core/Container";
import Text from "../components/core/Text";
import Title from "../components/core/Title";
import { QUESTIONS_SOURCES } from "../constants/sources";

function About() {
  return (
    <Container className="mw-720 py-5">
      <Head>
        <meta name="description" content="Learn more about Tiqa." />
        <title>About · Tiqa</title>
      </Head>
      <Title tag="h2" variant="h5">
        About{" "}
        <Text color="primary" tag="span">
          tiqa
        </Text>
      </Title>
      <Text small>
        Tiqa consists of interview questions and answers organized by topics.
        The app can be used by interviewees and interviewers for preparing
        technical interviews. Tiqa is an open-source project hosted on{" "}
        <a
          href={process.env.NEXT_PUBLIC_GITHUB_REPO}
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>{" "}
        under{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          rel="noopener noreferrer"
          target="_blank"
        >
          CC BY 4.0
        </a>
        .
      </Text>
      <Title className="mt-5" tag="h2" variant="h5">
        Source of questions
      </Title>
      <Text small>
        (under{" "}
        <a
          href="https://www.apache.org/licenses/LICENSE-2.0"
          rel="noopener noreferrer"
          target="_blank"
        >
          Apache License 2.0
        </a>
        )
      </Text>
      <ul className="small">
        {QUESTIONS_SOURCES.map((source) => (
          <li key={source.name}>
            <a href={source.link} rel="noopener noreferrer" target="_blank">
              {source.name}
            </a>
          </li>
        ))}
      </ul>
      <Title className="mt-5" tag="h2" variant="h5">
        Legal & Policies
      </Title>
      <Link href="/terms" passHref>
        <Card className="mt-3">
          <Card.Body>
            <Card.Title className="mb-0" tag="h3">
              Terms & Conditions
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
      <Link href="/privacy" passHref>
        <Card className="mt-3">
          <Card.Body>
            <Card.Title className="mb-0" tag="h3">
              Privacy Policy
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: { back: "/", title: "About" },
  };
}

export default About;
