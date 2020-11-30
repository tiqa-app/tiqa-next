const Brand = ({ height = 40, width = 120 }) => {
  return <img src="/logo.png" alt="brand logo" height={height} width={width} />;
};

Brand.displayName = "Brand";

export default Brand;
