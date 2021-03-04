import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;
  overflow-y: auto;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.container};
  color: ${(props) => props.color || props.theme.colors.text};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transform: background 0.3s, transform 0.3s;
  padding: 1rem;

  &:hover,
  &.selected {
    font-weight: 900;
    background: ${(props) => props.color || props.theme.colors.light};
    color: ${(props) =>
      props.color ? props.theme.colors.white : props.theme.colors.black};
    transform: translate(5px) scale(1.02);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    border-radius: 20px;
    padding: 0 1rem;

    &:hover,
    &.selected {
      transform: translate(0) scale(1.02);
    }
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  text-align: left;
  padding: 0 1rem;
  margin-top: 1rem;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
  }
`;
