import { useContext } from 'react';
import Profile from '../components/Profile';
import RepositoryFilter from '../components/RepositoriesFilter';
import RepositoriesParent from '../components/RepositoriesParent';
import { RepositoriesProvider } from '../contexts/RepositoriesContext';
import { UserContext } from '../contexts/UserContext';
import { Container, Main, SideBar } from '../styles/pages/repository';

export default function Repositories() {
  const { user } = useContext(UserContext);

  return (
    <RepositoriesProvider user={user}>
      <Container>
        <SideBar>
          <Profile user={user}/>
          <RepositoryFilter />
        </SideBar>
        <Main>
          <RepositoriesParent />
        </Main>
      </Container>
    </RepositoriesProvider>
  );
}
