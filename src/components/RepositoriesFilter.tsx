import { useContext } from 'react';
import { RepositoriesContext } from '../contexts/RepositoriesContext';

import {
  Cleaner,
  Container,
  Selector,
} from '../styles/components/RepositoriesFilter';

export default function RepositoryFilter() {
  const { formattedRepositories, setLanguage } = useContext(
    RepositoriesContext,
  );

  const languages = formattedRepositories;

  const selectors = languages.map(({ language, count, color }) => (
    <Selector
      key={language.toLowerCase()}
      onClick={() => setLanguage(language)}
      color={color}>
      <span>{language}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => setLanguage('')}>Limpar</Cleaner>
    </Container>
  );
}
