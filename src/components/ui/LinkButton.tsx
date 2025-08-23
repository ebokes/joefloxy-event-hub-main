import React from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  to: string;
  text: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
}

const LinkButton = ({ to, text, variant }: LinkButtonProps) => {
  return (
    <Button
      variant={variant || "accent"}
      size="lg"
      className="text-lg px-8 py-6 cursor-pointer"
      asChild
    >
      <Link to={to}>{text}</Link>
    </Button>
  );
};

export default LinkButton;
