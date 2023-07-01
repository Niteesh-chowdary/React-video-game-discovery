import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length < limit) {
    return <Text>children</Text>;
  }
  return (
    <>
      <Text>
        {expanded ? children : children.slice(limit) + ".."}
        <Button
          marginLeft={1}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          disabled={children.length < limit}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
