import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";
`;

export const NewMovie = styled(Link)`
  width: 207px;
  height: 48px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    margin-right: 8px;
  }
  
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  grid-area: content;
  padding: 64px;  

  > header {
    display: flex;
    justify-content: space-between;    
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;  
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50px;
    border: 3px solid ${({ theme }) => theme.COLORS.PINK}; 
  }  
`;


