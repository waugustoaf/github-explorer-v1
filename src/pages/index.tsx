import { ChangeEvent, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  Logo,
  Title,
  Form,
  Input,
  Button,
} from '../styles/pages/index';

import { MdSearch } from 'react-icons/md';
import { UserContext } from '../contexts/UserContext';

export default function Home() {
  const [user, setUser] = useState('');
  const { setUsernameData } = useContext(UserContext);

  const router = useRouter();

  function changeUser(event: ChangeEvent<HTMLInputElement>) {
    setUser(event.target.value);
  }

  function submit() {
    setUsernameData(user);
    router.push('repository');
  }

  return (
    <Container>
      <Logo src="icons/github-logo.svg" alt="GitHub" />
      <Title>API GitHub</Title>
      <Form>
        <Input placeholder="Usuario" value={user} onChange={changeUser} />
        <Button onClick={submit}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
