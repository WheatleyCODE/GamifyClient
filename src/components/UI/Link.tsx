import { Link as ReactLink } from 'react-router-dom';
import React, { FC, memo } from 'react';

export type LikProps = {
  text: string;
  href: string;
};

export const Link: FC<LikProps> = memo(({ text, href }) => {
  return (
    <ReactLink to={href} className="link">
      {text}
    </ReactLink>
  );
});
