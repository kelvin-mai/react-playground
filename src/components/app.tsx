import { useState, useLayoutEffect, useRef } from 'react';
import { createDocument, DocumentArgument, initialDocument } from '../utils';
import { Editor } from './editor';

export const App = () => {
  const [document, setDocument] = useState<DocumentArgument>(initialDocument);
  const resultRef = useRef<HTMLIFrameElement>(null);

  useLayoutEffect(() => {
    const el = resultRef.current!.contentDocument!;
    const contents = createDocument(document);
    el.open();
    el.write(contents);
    el.close();
  }, [document]);

  return (
    <>
      <section className='playground'>
        <Editor
          lang='html'
          value={document?.html}
          onChange={(html) => setDocument({ ...document, html })}
        />
        <Editor
          lang='js'
          value={document?.js}
          onChange={(js) => setDocument({ ...document, js })}
        />
        <Editor
          lang='css'
          value={document?.css}
          onChange={(css) => setDocument({ ...document, css })}
        />
      </section>
      <section className='result'>
        <iframe title='result' className='iframe' ref={resultRef} />
      </section>
    </>
  );
};
