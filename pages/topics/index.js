import Head from "next/head";
import Link from "next/link";
import Badge from "../../components/core/Badge";
import Container from "../../components/core/Container";
import List from "../../components/core/List";

function Topics({ topics }) {
  return (
    <Container className="mb-4">
      <Head>
        <meta name="description" content="List of interview question topics." />
        <title>Topics · Tiqa</title>
      </Head>
      <List>
        {topics &&
          topics.map((topic) => (
            <Link href={`/topics/${topic.slug}/1`} key={topic.slug} passHref>
              <List.Item
                alt={`${topic.label} logo`}
                bordered={true}
                extra={topic.inprogress && <Badge>Coming soon</Badge>}
                hasChevron={true}
                image={topic.image}
                title={topic.label}
              />
            </Link>
          ))}
      </List>
    </Container>
  );
}

export async function getStaticProps() {
  const topics = require("../../data/topics.json");
  return {
    props: { back: "/", title: "Topics", topics },
  };
}

export default Topics;
