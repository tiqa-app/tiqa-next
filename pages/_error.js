import Head from "next/head";
import Link from "next/link";
import Button from "../components/core/Button";
import Container from "../components/core/Container";
import Result from "../components/core/Result";

function Error() {
  return (
    <Container className="mw-720 py-5">
      <Head>
        <title>Error · Tiqa</title>
      </Head>
      <Result
        alt="Error illustration"
        headline="Oops!"
        image="/img/illustrations/undraw_cancel.svg"
        description="Something went wrong..."
        height={100}
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
    props: { title: "Error" },
  };
}

export default Error;
