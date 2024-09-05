import { useState } from "react";
import { Button } from "@chakra-ui/react";

interface Prop {
  children: string;
}

function DescriptionShortener({ children }: Prop) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {expanded ? children : children.slice(0, 140) + "..."}
      <Button
        className="ms-2"
        colorScheme="yellow"
        size={"xs"}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "show less" : "read more"}
      </Button>
    </div>
  );
}

export default DescriptionShortener;
