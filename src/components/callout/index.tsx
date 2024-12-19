import classNames from "classnames";
import Blockquote from "../blockquote";
import { BodyParagraph, P } from "../text";
import s from "./Callout.module.css";
import {
  Info,
  Lightbulb,
  MessageSquareWarning,
  OctagonAlert,
  TriangleAlert,
} from "lucide-react";

type CalloutType = "note" | "tip" | "important" | "warning" | "caution";

interface CalloutProps {
  type: CalloutType;
  children: React.ReactNode | string;
}

export default function Callout({ type, children }: CalloutProps) {
  return (
    <Blockquote
      className={classNames(s.callout, {
        [s.note]: type === "note",
        [s.tip]: type === "tip",
        [s.important]: type === "important",
        [s.warning]: type === "warning",
        [s.caution]: type === "caution",
      })}
    >
      <P className={s.header} weight="medium">
        <CalloutIcon className={s.icon} type={type} />{" "}
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </P>
      {typeof children === "string" ? (
        <BodyParagraph>{children}</BodyParagraph>
      ) : (
        children
      )}
    </Blockquote>
  );
}

function CalloutIcon({
  className,
  type,
}: {
  className: string;
  type: CalloutType;
}): React.ReactNode {
  switch (type) {
    case "note":
      return <Info className={className} />;
    case "tip":
      return <Lightbulb className={className} />;
    case "important":
      return <MessageSquareWarning className={className} />;
    case "warning":
      return <TriangleAlert className={className} />;
    case "caution":
      return <OctagonAlert className={className} />;
  }
}
