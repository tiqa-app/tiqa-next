import Head from "next/head";
import Link from "next/link";
import Button from "../components/core/Button";
import Container from "../components/core/Container";
import Result from "../components/core/Result";

function Offline() {
  return (
    <Container className="mw-720 py-5">
      <Head>
        <title>Offline · Tiqa</title>
      </Head>
      <Result
        alt="Offline illustration"
        headline="Oops!"
        image="/img/illustrations/undraw_server_down.svg"
        description="It looks like you are not connected to the Internet."
        height={90}
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
    props: { title: "Offline" },
  };
}

export default Offline;
