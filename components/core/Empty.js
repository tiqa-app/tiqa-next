import Result from "./Result";

const Empty = ({ children, className, description, headline, hideIcon }) => {
  return (
    <Result
      alt="Empty illustration"
      className={className}
      description={description}
      headline={headline}
      image={!hideIcon && "/img/illustrations/undraw_tweetstorm.svg"}
      height={120}
      width={130}
    >
      {children}
    </Result>
  );
};

Empty.displayName = "Empty";

export default Empty;
