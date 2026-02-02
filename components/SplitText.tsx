import { wordItem, wordsContainer } from "@/animations/hero/hero";
import * as motion from "motion/react-client";

export const SplitText: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <motion.h1
      variants={wordsContainer}
      initial="hidden"
      whileInView="show"
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordItem}
          className="inline-block mr-2"
          aria-hidden
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};
