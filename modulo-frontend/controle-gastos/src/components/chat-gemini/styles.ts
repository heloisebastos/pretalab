import styled from "styled-components";

export const ChatIcon = styled.div`
  position: fixed;
  bottom: 60px;
  right: 16px;
  cursor: pointer;
  background: #28af15;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 16px;
  width: 300px;
  max-height: 400px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ChatHeader = styled.div`
  background: #28af15;
  color: white;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

export const ChatBody = styled.div`
  flex: 1;
  padding: 8px;
  overflow-y: auto;
`;

export const ChatFooter = styled.div`
  display: flex;
  padding: 8px;
  border-top: 1px solid #ccc;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

export const SendButton = styled.button`
  background: #28af15;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #1f8c12;
  }
`;

export const Message = styled.div<{ sender: string }>`
  padding: 8px;
  margin: 4px 0;
  background: ${({ sender }) => (sender === "user" ? "#e0f7fa" : "#fce4ec")};
  border-radius: 8px;
  align-self: ${({ sender }) => (sender === "user" ? "flex-end" : "flex-start")};
  max-width: 80%;
  word-wrap: break-word;
`;

