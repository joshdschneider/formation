import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/common';

type HighlightProps = {
  language: string;
  lines: string[];
};

function Highlight({ language, lines }: HighlightProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={language}>{lines.join('\n')}</code>
    </pre>
  );
}

export default Highlight;
