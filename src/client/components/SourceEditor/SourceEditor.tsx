import { useState } from 'react';
import { createEditor } from 'slate';
import { withReact } from 'slate-react';
import { SourceView } from './components/SourceView';
import { Editor } from './components/Editor';
import { Mode } from '../../contexts/constants';
import { SourceEditorProps } from './type';
import styles from './sourceEditor.css';

export const SourceEditor = ({ activeFile, mode }: SourceEditorProps) => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <div className={styles.sourceEditor}>
      {mode === Mode.Editing ? (
        <Editor
          key={JSON.stringify(activeFile.content)}
          instance={editor}
          initialValue={activeFile.content}
        />
      ) : (
        <SourceView data={activeFile.content} />
      )}
    </div>
  );
};
