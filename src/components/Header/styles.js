import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_000};

  display: flex;

  padding: 0 64px;
  cursor: default;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  width: 100%;
  
  color: ${({ theme }) => theme.COLORS.WHITE_200};  

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    
    margin-left: 16px;
    line-height: 24px;

    gap: 16px;
    
    cursor: default;
  }  

  h1 { 
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .container img  {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_000};    
  }

  .log {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  a {
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }

  .container button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;