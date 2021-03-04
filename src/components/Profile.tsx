import { MdGroup, MdLink, MdLocationCity, MdWork } from 'react-icons/md';
import {
  Avatar,
  Container,
  Data,
  Header,
  Inner,
  Login,
  Name,
} from '../styles/components/Profile';

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

interface ProfileProps {
  user: UserDTO;
}

export default function Profile({ user }: ProfileProps) {
  if (!user) return <p>Carregando...</p>;

  const {
    avatar_url,
    login,
    name,
    followers,
    following,
    company,
    location,
    html_url,
  } = user;

  return (
    <Container>
      <Header>
        <Avatar src={avatar_url} />
        <Login>{login}</Login>
        <Name>{name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {followers} &nbsp;<i>seguidores</i>&nbsp; &middot; {following} &nbsp;
          <i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} />
          {company}
        </Data>
        <Data>
          <MdLocationCity size={20} />
          {location}
        </Data>
        <Data>
          <MdLink size={20} />
          <a href={html_url}>Perfil no GitHub</a>
        </Data>
      </Inner>
    </Container>
  );
}
