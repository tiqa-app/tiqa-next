import Head from "next/head";
import Container from "../components/core/Container";
import Text from "../components/core/Text";
import Title from "../components/core/Title";

function Terms() {
  return (
    <Container className="mw-720 mb-5">
      <Head>
        <meta
          name="description"
          content="Learn more about Tiqa terms and conditions."
        />
        <title>Terms · Tiqa</title>
      </Head>
      <header className="text-center mt-5">
        <Title>Terms & Conditions</Title>
        <Text className="mb-0 text-muted" small>
          Last updated: Nov 20th, 2020
        </Text>
      </header>
      <Text className="mt-5" small>
        These Terms govern your access to and use of Tiqa website as well as any
        other media form, media channel, mobile website or mobile application
        related. You agree that by accessing Tiqa, you have read, understood,
        and agree to be bound by all of these Terms and Conditions. If you do
        not agree with all of these Terms and Conditions, then you are expressly
        prohibited from using Tiqa and you must discontinue use immediately. .
        We reserve the right, in our sole discretion, to make changes or
        modifications to these Terms and Conditions at any time and for any
        reason.
      </Text>
      <Title className="mt-5" tag="h2" variant="h5">
        Prohibited Activities
      </Title>
      <Text small>
        You may not access or use Tiqa for any purpose other than that for which
        we make it available. Tiqa may not be used in connection with any
        commercial endeavors except those that are specifically endorsed or
        approved by us.
      </Text>
      <Title className="mt-5" tag="h2" variant="h5">
        Limitations of Liabilities
      </Title>
      <Text small>
        The Services are provided "as is" without warranties of any kind, either
        express or implied, including without limitation warranties of
        merchantability, fitness for a particular purpose, non-infringement, or
        other violation of rights. We do not warrant the adequacy, currency,
        accuracy, likely results, or completeness of the Services or any
        third-party sites linked to or from the Services, or that the functions
        provided will be uninterrupted, virus, or error-free.
      </Text>
      <Title className="mt-5" tag="h2" variant="h5">
        Third-party websites & content
      </Title>
      <Text small>
        Tiqa may contain links to other websites (“Third-Party Websites”) as
        well as articles, photographs, text, graphics, pictures, designs, music,
        sound, video, information, applications, software, and other content or
        items belonging to or originating from third parties (“Third-Party
        Content”). Such Third-Party Websites and Third-Party Content are not
        investigated, monitored, or checked for accuracy, appropriateness, or
        completeness by us, and we are not responsible for any Third-Party
        Websites accessed through Tiqa or any Third-Party Content posted on,
        available through, or installed from the Site, including the content,
        accuracy, offensiveness, opinions, reliability, privacy practices, or
        other policies of or contained in the Third-Party Websites or the
        Third-Party Content.
      </Text>
      <Title className="mt-5" tag="h2" variant="h5">
        Questions
      </Title>
      <Text small>
        If you have any questions about this Terms and Conditions, please
        contact us at <a>{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</a>.
      </Text>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: { back: "/about", title: "Terms" },
  };
}

export default Terms;
