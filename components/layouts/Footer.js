import Text from "../core/Text";

const Footer = () => {
  return (
    <footer className="footer text-center py-3">
      <Text bold className="mb-0" color="muted" smaller>
        © 2020 Tiqa
      </Text>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
