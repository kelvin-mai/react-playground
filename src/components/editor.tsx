import { FunctionComponent } from 'react';
import { UnControlled } from 'react-codemirror2';

import { editorOptions, getLanguageProps, Language } from '../utils';

export interface EditorProps {
  value?: string;
  lang: Language;
  onChange(value: string): void;
}

export const Editor: FunctionComponent<EditorProps> = ({
  value,
  lang,
  onChange,
}) => {
  const { text, mode } = getLanguageProps(lang);
  return (
    <div className='editor'>
      <div className='editor-header'>{text}</div>
      <UnControlled
        value={value || ''}
        options={{
          mode,
          ...editorOptions,
        }}
        autoCursor={false}
        onChange={(_, __, value) => onChange(value)}
      />
    </div>
  );
};
