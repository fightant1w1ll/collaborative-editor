import { useEffect } from 'react';
import { DocumentContext, clientDocument } from '../../models';
import { SyncDocumentProps } from './types';

const SyncDocument = ({ children, onStatusChange }: SyncDocumentProps) => {
  useEffect(() => {
    clientDocument.addStatusListener(onStatusChange);
    return () => clientDocument.removeStatusListener(onStatusChange);
  }, [onStatusChange]);

  return (
    <DocumentContext.Provider value={clientDocument}>
      {children}
    </DocumentContext.Provider>
  );
};

export default SyncDocument;
