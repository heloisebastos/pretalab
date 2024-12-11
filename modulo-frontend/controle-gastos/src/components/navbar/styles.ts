import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: #8B008B;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    list-style-type: none;
    color: inherit;
    text-decoration: none;
    padding: 0.5rem;
    border-bottom: 3px solid transparent;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;