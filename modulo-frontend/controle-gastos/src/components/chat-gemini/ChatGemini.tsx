import React, { useState } from "react";
import * as S from "./styles";
import { AiOutlineMessage } from "react-icons/ai"; 

const ChatGemini = ({ despesas }: { despesas: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Adiciona a mensagem do usuário ao chat
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    try {
      // Chamada à API do Gemini
      const response = await fetch("/api/gemini-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, despesas }),
      });
      const data = await response.json();

      // Adiciona a resposta da IA ao chat
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Erro ao se comunicar com a API do Gemini:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "Erro ao te responder." }]);
    }

    setInput(""); // Limpa o campo de entrada
  };

  return (
    <>
      <S.ChatIcon onClick={toggleChat}>
        <AiOutlineMessage size={32} />
      </S.ChatIcon>
      {isOpen && (
        <S.ChatContainer>
          <S.ChatHeader>
            <span>Conselheiro Financeiro</span>
            <button onClick={toggleChat}>X</button>
          </S.ChatHeader>
          <S.ChatBody>
            {messages.map((msg, index) => (
              <S.Message key={index} sender={msg.sender}>
                {msg.text}
              </S.Message>
            ))}
          </S.ChatBody>
          <S.ChatFooter>
            <S.Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
            <S.SendButton onClick={sendMessage}>Enviar</S.SendButton>
          </S.ChatFooter>
        </S.ChatContainer>
      )}
    </>
  );
};

export default ChatGemini;

