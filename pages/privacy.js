import Head from "next/head";
import Container from "../components/core/Container";
import Text from "../components/core/Text";
import Title from "../components/core/Title";

function Privacy() {
  return (
    <Container className="mw-720 mb-5">
      <Head>
        <meta
          name="description"
          content="Learn more about Tiqa privacy policy."
        />
        <title>Privacy · Tiqa</title>
      </Head>
      <header className="text-center mt-5">
        <Title>Privacy Policy</Title>
        <Text className="mb-0 text-muted" small>
          Last updated: Nov 20th, 2020
        </Text>
      </header>
      <Text className="mt-5" small>
        This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit Tiqa website, including any
        other media form, media channel, mobile website, or mobile application
        related or connected thereto (collectively, the “Site”). Please read
        this privacy policy carefully. If you do not agree with the terms of
        this privacy policy, please do not access the site.
      </Text>
      <Title className="mt-5" tag="h2" variant="h5">
        Information we collect
      </Title>
      <Text small>
        Tiqa does not collect any information directly. However Tiqa is using
        third-party websites and applications that may collect information.
        Those are described in the "Other Third Parties" section.
      </Text>
      <Title className="mt-5" tag="h2" variant="h5">
        How and why we collect information
      </Title>
      <Text small>
        We use information about you for the purposes listed below:
      </Text>
      <ul className="small">
        <li>
          To monitor and analyze usage and trends to improve your experience
          with the Site.
        </li>
        <li>To ensure quality, maintain safety, and improve our Services.</li>
        <li>To fix problems with our Services.</li>
        <li>To place and manage ads in our advertising program.</li>
      </ul>
      <Title className="mt-5" tag="h2" variant="h5">
        Other Third Parties
      </Title>
      <Text small>
        We may use third-party advertising companies to serve ads when you visit
        the Site. These companies may use information about your visits to the
        Site and other websites that are contained in web cookies in order to
        provide advertisements about goods and services of interest to you.
      </Text>
      <Text small>
        We are using Google Analytics to allow tracking technologies services on
        the Site through the use of third-party cookies, to, among other things,
        analyze and track users’ use of the Site, determine the popularity of
        certain content and better understand online activity. By accessing the
        Site, you consent to the collection and use of your information by these
        third-party vendors. You are encouraged to review their privacy policy
        and contact them directly for responses to your questions.
      </Text>
      <Text small>
        The Site may contain links to third-party websites and applications of
        interest, including advertisements and external services, that are not
        affiliated with us. Once you have used these links to leave the Site,
        any information you provide to these third parties is not covered by
        this Privacy Policy, and we cannot guarantee the safety and privacy of
        your information. Before visiting and providing any information to any
        third-party websites, you should inform yourself of the privacy policies
        and practices (if any) of the third party responsible for that website,
        and should take those steps necessary to, in your discretion, protect
        the privacy of your information. We are not responsible for the content
        or privacy and security practices and policies of any third parties,
        including other sites, services or applications that may be linked to or
        from the Site.
      </Text>
      <Title className="mt-5" tag="h2" variant="h5">
        Changes to this Policy
      </Title>
      <Text small>
        We may update or modify this Privacy Policy at any time without prior
        notice. When we update the Privacy Policy, we will revise the "Updated
        Date" date above and post the new Privacy Policy. We recommend that you
        review the Privacy Policy each time you visit the Services to stay
        informed of our privacy practices. Any changes will be effective when we
        post the revised policy. Your continued use of our Services after any
        changes or revisions to this Privacy Policy shall indicate your
        agreement with the terms of such revised Privacy Policy.
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
    props: { back: "/about", title: "Privacy" },
  };
}

export default Privacy;
