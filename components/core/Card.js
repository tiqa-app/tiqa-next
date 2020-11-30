import clsx from "clsx";
import { forwardRef } from "react";
import Text from "./Text";
import Title from "./Title";

const CardBody = ({ children, className }) => {
  return <div className={clsx("card-body", className)}>{children}</div>;
};

const CardText = ({ children, className }) => {
  return (
    <Text className={clsx("mb-0", className)} small>
      {children}
    </Text>
  );
};

const CardTitle = ({ children, className, tag }) => {
  return (
    <Title className={clsx(className)} variant="h4" tag={tag}>
      {children}
    </Title>
  );
};

const Card = forwardRef(({ children, className, href, onClick }, ref) => {
  const Component = href ? "a" : "div";
  return (
    <Component
      className={clsx("card", className)}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </Component>
  );
});

Card.displayName = "Card";
CardBody.displayName = "CardBody";
CardText.displayName = "CardText";
CardBody.CardTitle = "CardTitle";

Card.Body = CardBody;
Card.Text = CardText;
Card.Title = CardTitle;

export default Card;
