import React, { useContext } from 'react';
import Repository from './RepositoriesChilds';
import { Container, Error } from '../styles/components/RepositoriesParent';
import { RepositoriesContext } from '../contexts/RepositoriesContext';
import { useRouter } from 'next/router';

export default function RepositoriesParent() {
  const { reposComplete, currentLanguage } = useContext(RepositoriesContext);
  const router = useRouter();
  
  if (
    reposComplete.length === 0 ||
    reposComplete[0].name === 'undefined.github.io'
  ) {
    return (
      <>
        <h1>Carregando...</h1><br/>

        <p>Caso demore muito a carregar, pode ser que o usuario foi digitado erroneamente</p>
        <p>Neste caso, clique no botão abaixo</p>
        <Error onClick={() => router.push('/')}>Voltar</Error>
      </>
    );
  }


  const repositories =
    currentLanguage === ''
      ? reposComplete.map((repo) => (
          <Repository key={repo.id} repository={repo} />
        ))
      : reposComplete
          .filter((repo) => repo.language === currentLanguage)
          .map((repo) => <Repository key={repo.id} repository={repo} />);

  return (
    <Container>
      {repositories}
    </Container>
  );
}
