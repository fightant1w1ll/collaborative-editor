import { useEffect, useState } from 'react';
import { AuthContext } from '../../contexts';
import { UserStatus } from '../../models';
import { ContainerProps } from '../type';

export const AuthContainer = ({ children }: ContainerProps) => {
  const [userStatus, setUserStatus] = useState(UserStatus.NotLoggedIn);
  const userId = Math.random().toString(36).substring(7);

  useEffect(() => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fingerprint: userId,
      }),
    })
      .then(res => res.json())
      .then(json => {
        if (json.message === 'OK') {
          setUserStatus(UserStatus.LoggedIn);
          console.log(`User login successfully`);
        }
      })
      .catch(e => console.error(`User login failed`, e));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userId,
        userStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
