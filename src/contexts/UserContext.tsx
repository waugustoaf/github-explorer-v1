import { createContext, ReactNode, useEffect, useState } from 'react';

interface UserDTO {
  [key: string]: any;
  avatar_url: string;
  login: string;
  name: string;
  followers: string;
  following: string;
  company: string;
  location: string;
  html_url: string;
}

interface UserResponse {
  user: UserDTO;
  setUsernameData: (username: string) => void;
}

export const UserContext = createContext({} as UserResponse);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState({} as UserDTO);
  const [username, setUsername] = useState('');

  function setUsernameData(customUser: string) {
    setUsername(customUser);
  }

  useEffect(() => {
    if (username !== '') {
      (async function getUsers() {
        fetch(`https://api.github.com/users/${username}`)
          .then((data) => data.json())
          .then((data) => setUser(data));
      })();
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ user, setUsernameData }}>
      {children}
    </UserContext.Provider>
  );
}
