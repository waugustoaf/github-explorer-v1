import PropTypes from 'prop-types';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { langColors } from '../services/config';
import { UserProvider } from './UserContext';

interface UserProps {
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

interface RepositoriesProviderProps {
  children: ReactNode;
  user: UserDTO;
}

interface RepositoryProps {
  language: string;
  name: string;
  description: string;
  id: number;
  color: string;
  link: string;
  [key: string]: any;
}

interface formattedRepositories {
  language: string;
  name: string;
  description: string;
  id: number;
  color: string;
  link: string
}

interface FilterProps {
  language: string;
  count: number;
  color: string;
}

interface RepositoriesContextResponse {
  repositories: formattedRepositories[];
  formattedRepositories: FilterProps[];
  reposComplete: RepositoryProps[];
  currentLanguage: string;
  setLanguage(newLanguage: string): any;
  user: UserProps;
}

export const RepositoriesContext = createContext(
  {} as RepositoriesContextResponse,
);

export function RepositoriesProvider({
  children,
  user,
}: RepositoriesProviderProps): JSX.Element {
  const [repositories, setRepositories] = useState(
    [] as formattedRepositories[],
  );
  const [colors, setColors] = useState(langColors);
  const [currentLanguage, setCurrentLanguage] = useState('');
  

  useEffect(() => {
    (async function getRepositories() {
      fetch(`https://api.github.com/users/${user.login}/repos`)
        .then((data) => data.json())
        .then((data) => setRepositories(data));
    })();
  }, [user]);

  useEffect(() => {
    repositories.forEach((repo) => {
      if (repo.language !== null && !colors[repo.language.toLowerCase()]) {
        setColors({
          ...colors,
          [repo.language.toLowerCase()]: langColors.generateRandomColor(),
        });
      }
    });
  }, [repositories]);

  function setLanguage(newLanguage: string) {
    setCurrentLanguage(newLanguage);
  }

  function getLangsRepos() {
    const languages = repositories.map((repo: RepositoryProps) => {
      const item = {
        language: repo.language,
        name: repo.name,
        description: repo.description,
        id: repo.id,
        color:
          repo.language !== null
            ? colors[repo.language.toLowerCase()]
            : null || langColors.generateRandomColor(),
        link: repo.html_url
      };

      return item;
    });

    return languages;
  }

  function getLangsFrom() {
    const languages = repositories
      .map((repo: RepositoryProps) => {
        return {
          language: '' || repo.language,
          name: '' || repo.name,
          description: '' || repo.description,
          id: Math.random() * 10 || repo.id,
          color:
            repo.language !== null
              ? colors[repo.language.toLowerCase()]
              : null || langColors.generateRandomColor(),
        };
      })
      .reduce(
        (data, item) => ({
          ...data,
          [item.language]: (data[item.language] || 0) + 1,
        }),
        {},
      ) as formattedRepositories;
    delete languages['null'];

    const response = Object.keys(languages)
      .map((languageIndex) => ({
        language: languageIndex,
        count: languages[languageIndex],
        color:
          colors[languageIndex.toLowerCase()] ||
          langColors.generateRandomColor(),
      }))
      .sort((a, b) => b.count - a.count) as FilterProps[];

    return response;
  }

  return (
    <UserProvider>
      <RepositoriesContext.Provider
        value={{
          repositories,
          formattedRepositories: getLangsFrom(),
          reposComplete: getLangsRepos(),
          currentLanguage,
          setLanguage,
          user,
        }}>
        {children}
      </RepositoriesContext.Provider>
    </UserProvider>
  );
}

RepositoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
