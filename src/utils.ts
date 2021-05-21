import { EditorConfiguration } from 'codemirror';

export const editorOptions: EditorConfiguration = {
  theme: 'dracula',
  lineNumbers: true,
  lineWrapping: true,
};

export type Language = 'html' | 'js' | 'css';

export type LanguagePropsMap = {
  [K in Language]: {
    text: string;
    mode: string;
  };
};

export const languagePropsMap: LanguagePropsMap = {
  html: {
    text: 'HTML',
    mode: 'htmlmixed',
  },
  js: {
    text: 'JavaScript',
    mode: 'javascript',
  },
  css: {
    text: 'CSS',
    mode: 'css',
  },
};

export const getLanguageProps = (l: Language) => languagePropsMap[l];

export interface DocumentArgument {
  html?: string;
  css?: string;
  js?: string;
}

export const createDocument = ({ html, css, js }: DocumentArgument) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      ${css}
    </style>
  </head>
  <body>
    ${html}
  </body>
  <script type="text/javascript">
    ${js}
  </script>
</html>
`;

export const initialDocument: DocumentArgument = {
  html: `<h1>HELLO WORld</h1>`,
  css: `h1 { 
  color: red; 
}
  `,
  js: `console.log('hello world')`,
};
