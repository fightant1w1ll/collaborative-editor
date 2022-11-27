import { memo, useEffect, useState } from 'react';
import { ConnectionContext } from '../../contexts';
import { getShareDBConnection } from '../../models/core/getShareDBConnection';

const ConnectionContainer = ({ children }) => {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    setConnection(getShareDBConnection());
  }, []);

  return (
    <ConnectionContext.Provider
      value={{
        connection,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};

export default memo(ConnectionContainer);
