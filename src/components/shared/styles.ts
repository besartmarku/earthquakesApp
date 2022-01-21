import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ListItemContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

export const Input = styled.input`
  padding: 4px;
  font-size: 18px;
  height: 34px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #504e55;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background: white;
  color: #504e55;
  height: 40px;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #504e55;
  border-radius: 3px;
  width: 200px;
  cursor: pointer;
`;

export const LoaderContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Loader = styled.div`
  cursor: progress;
  border: 16px solid palevioletred;
  border-top: 16px solid #504e55;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
