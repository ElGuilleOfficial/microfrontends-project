import styled from 'styled-components';

const ContainerHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(51, 51, 51);
  color: white;
`

const CharacterExplorer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`
const LanguageButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #303f9f;
  }
`

export {
  ContainerHeader,
  CharacterExplorer,
  LanguageButton
};
