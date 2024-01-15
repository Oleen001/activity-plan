import React from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';

function DiceBearAvatar({ seed }) {
  const svgMarkup = createAvatar(style, { seed });
  
  return (
    <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />
  );
}
export default DiceBearAvatar;
