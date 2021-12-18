import React from 'react';
import SandPackEditor from './SandPack';

// judge component type is block
function isBlockComponent(type: string) {
  const blockTypes = [
    'div',
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'pre',
    'ul',
    'ol',
    'li',
  ];
  return blockTypes.includes(type);
}

// convert react nodes => string
function map(children: React.ReactNode): string {
  if (typeof children === 'string') {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(map).join('');
  }
  if (typeof children === 'object') {
    return (
      map(children.props.children) +
      (isBlockComponent(children.type) ? '\n' : '')
    );
  }
  return '';
}

function Editor({ children }: React.PropsWithChildren<{}>) {
  const code = map(children);
  return <SandPackEditor code={code} />;
}

export default Editor;
