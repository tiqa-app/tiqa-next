import clsx from "clsx";
import { forwardRef, useState } from "react";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import Collapse from "./Collapse";
import Title from "./Title";
import Text from "./Text";

function List({ children, className }) {
  return <div className={clsx("list", className)}>{children}</div>;
}

const ListCollapse = forwardRef(({ bordered, children, ...rest }, ref) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const Chevron = expanded ? ChevronUpIcon : ChevronDownIcon;

  return (
    <div className={clsx(bordered && "border-bottom")} ref={ref}>
      <ListItem
        chevron={Chevron}
        hasChevron={true}
        onClick={handleToggle}
        {...rest}
      />
      <Collapse className="py-3" open={expanded}>
        {children}
      </Collapse>
    </div>
  );
});

const ListItem = forwardRef(
  (
    {
      actions,
      alt,
      bordered,
      chevron: Chevron = ChevronRightIcon,
      extra,
      hasChevron,
      href,
      image,
      onClick,
      subtitle,
      title,
    },
    ref
  ) => {
    const Component = href ? "a" : "div";
    return (
      <Component
        className={clsx("list-item", bordered && "border-bottom")}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        <div className="list-item-left">
          {image && (
            <img
              alt={alt}
              className="mr-2"
              src={image}
              height="32"
              width="32"
            />
          )}
          <div>
            <Title className="mb-0" tag="div" variant="h5">
              {title}
            </Title>
            <Text smaller tag="span">
              {subtitle}
            </Text>
          </div>
        </div>
        {(actions || extra || hasChevron) && (
          <div className="list-item-extra">
            {extra}
            {hasChevron && <Chevron className="text-gray ml-2" />}
            {actions}
          </div>
        )}
      </Component>
    );
  }
);

ListCollapse.displayName = "ListCollapse";
ListItem.displayName = "ListItem";

List.Collapse = ListCollapse;
List.Item = ListItem;

export default List;
