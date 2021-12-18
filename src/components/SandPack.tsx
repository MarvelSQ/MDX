import { Sandpack } from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';

export default function SandPackEditor({ code }: { code: string }) {
  return (
    <Sandpack
      template="react-ts"
      files={{
        '/App.tsx': { code },
      }}
    />
  );
}
