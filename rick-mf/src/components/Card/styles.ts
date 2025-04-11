import styled from 'styled-components';

interface BadgeProps {
  status: 'Alive' | 'Dead' | 'unknown';
}

const ContainerCharacters = styled.div`
  background-color: #22A2B5;
  border-radius: 1rem;
  border: 1px solid #C0DF40;
  text-align: center;
  position: relative;

  & img {
    width: 100%;
    max-height: 400px;
    border-radius: 1rem;
  }
`
const StatusBadge = styled.div<BadgeProps>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  font-weight: bold;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  color: ${({ status }) =>
    status === 'unknown' ? 'white' : 'black'};
  background-color: ${({ status }) => {
    switch (status) {
      case 'Alive':
        return '#C0DF40';
      case 'Dead':
        return '#ff5050';
      case 'unknown':
        return '#797979';
      default:
        return 'gray';
    }
  }};
`

const CharacterSpan = styled.span`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
`

const CharactersDescription = styled.div`
  color: black;
  display: grid;
  text-align: justify;
  margin-bottom: 0.5rem;
  border-top: 2px solid #000000;
  padding-top: 0.5rem;

  & span {
    padding-left: 1rem;
  }
`

export {
  ContainerCharacters,
  StatusBadge,
  CharacterSpan,
  CharactersDescription,
};
