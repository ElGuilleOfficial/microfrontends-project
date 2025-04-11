import styled from 'styled-components';

const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`

const BodyTitle = styled.span`
  font-size: 2.5rem;
  margin: 1rem;
  text-align: center;
`

const BodyButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const BodyButtonOption = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
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
  ContainerBody,
  BodyTitle,
  BodyButtons,
  BodyButtonOption,
};
