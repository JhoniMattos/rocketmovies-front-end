import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto ;
  grid-template-areas: 
  "header"
  "content";

  > section {
    grid-area: content;
    overflow-y: auto;
    padding: 0 10px 50px;   
    margin: 10px auto 0;
    width: min(90%, 100rem);
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  > div {
    display: flex;
    height: 48px;
    align-items: center;
    gap: 8px;
  }


  a { 
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;

    padding-top: 64px;
  }

  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_000};    
  }

  strong {
    display: flex;
    align-items: center;
    
    gap: 8px;
  }

  .clock {   
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    margin-top: 16px;
    font-size: 16px;
    text-align: justify;
  }
`;