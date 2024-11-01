import React from "react";
import Spacing from "../components/spacing";

const FooterBlog: React.FC = () => {
  return (
    <div>
      <h2>Feedback</h2>
      <p>
        Having a different opinion? A nuance to bring? A question to ask? Please
        share it!
      </p>
      <p>
        I'm always looking for feedback. The best way to share your thoughts is
        to open an issue on the{" "}
        <a
          href="https://github.com/JosephBARBIERDARNAL/barbierjoseph.com/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="clickable"
        >
          GitHub repository
        </a>{" "}
        of the site.
      </p>
      <Spacing size={3} />
    </div>
  );
};

export default FooterBlog;
