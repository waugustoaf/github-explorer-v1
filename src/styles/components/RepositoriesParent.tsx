import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 2rem;
  margin-top: 2rem;

  overflow-y: auto;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto;
  }
`;

export const Error = styled.div`
  cursor: pointer;
  text-decoration: underline;
`;
