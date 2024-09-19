import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-size: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  text-align: left;

  max-width: 100%;
  min-height: 200px;
  margin: 24px 0;
  padding: 32px;
  border-radius: 16px;
  border: none;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > footer {
    margin-top: 15px;
  }
`;