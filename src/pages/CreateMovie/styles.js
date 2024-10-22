import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content"
  ;

  > main {
    grid-area: content;
    overflow-y: auto;
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

export const Form = styled.form`
  max-width: 1113px;
  margin: 38px auto;

  > header {
    margin-bottom: 40px;
  }

  .back {
    display: flex;
    
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .back svg {
    font-size: 20px;
    margin-right: 4px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 40px;
    margin-bottom: 40px;
   }

   textarea {
    margin-bottom: 40px;
   }

   h2 {
    font-size: 20px;
    margin-bottom: 24px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
   }

   .tag {
    display: flex;
    align-items: center;

    width: 100%;
    height: 88px;
    gap: 24px;
    
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 40px;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
   }

   .footer {
      display: flex;
      gap: 40px;
   }

   button:nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
   }

   button:nth-child(1):hover {
    &:disabled {
    opacity: 0.5;
  }
   }
`;