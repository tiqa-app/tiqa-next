import clsx from "clsx";
import Text from "./Text";
import Title from "./Title";

const Result = ({
  alt,
  children,
  className,
  description,
  headline,
  height,
  image,
  width,
}) => {
  return (
    <div className={clsx("text-center", className)}>
      {image && (
        <img
          className="mb-5"
          src={image}
          alt={alt}
          height={height}
          width={width}
        />
      )}
      <Title className="mb-0" variant="h4">
        {headline}
      </Title>
      <Text className="mb-0 mt-2" small>
        {description}
      </Text>
      {children}
    </div>
  );
};

Result.displayName = "Result";

export default Result;
