import React from 'react';
import {
  Container,
  Descripton,
  Footer,
  Lang,
  Link,
  Name,
} from '../styles/components/RepositoriesChilds';

interface RepositoryProps {
  language: string;
  name: string;
  description: string;
  id: number;
  color: string;
  link: string;
}

interface Request {
  repository: RepositoryProps;
}

export default function Repository({ repository }: Request) {
  const { name, description, language, color, link } = repository;

  return (
    <Container color={color}>
      <Name>{name}</Name>
      <Descripton>{description}</Descripton>
      <Footer color={color}>
        <Lang>{language}</Lang>
        <Link href={link} target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
}
