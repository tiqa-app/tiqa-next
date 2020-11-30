import Head from "next/head";
import Link from "next/link";
import Button from "../components/core/Button";
import Container from "../components/core/Container";
import Result from "../components/core/Result";

function Custom404() {
  return (
    <Container className="mw-720 py-5">
      <Head>
        <title>Not found · Tiqa</title>
      </Head>
      <Result
        alt="Page not found illustration"
        headline="Oops!"
        image="/img/illustrations/undraw_page_not_found.svg"
        description="The page you are looking for could not be found."
        height={80}
        width={145}
      >
        <Link href="/" passHref>
          <Button className="mt-5" type="primary">
            Back to home
          </Button>
        </Link>
      </Result>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Not found" },
  };
}

export default Custom404;
