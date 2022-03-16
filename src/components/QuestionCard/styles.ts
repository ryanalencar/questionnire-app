import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 80%;
  padding: 3rem 0rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) =>
    theme.title === 'light'
      ? theme.colors.secondary400
      : theme.colors.primary600};
  border-radius: 4px;
`;

export const QuestionSection = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
`;

export const QuestionCounter = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) =>
    theme.title === 'light'
      ? theme.colors.primary500
      : theme.colors.secondary200};

  span {
    font-size: 18px;
  }
`;

export const QuestionText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) =>
    theme.title === 'light' ? theme.colors.primary500 : theme.colors.text};
`;

export const AnswerSection = styled.section`
  padding: 1rem;
`;

export const SectionSeparator = styled.div`
  position: relative;
  border-right: 1px solid ${({ theme }) => theme.colors.primary400};
`;
