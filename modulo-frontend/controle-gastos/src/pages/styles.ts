import styled from "styled-components";
import finance from '../assets/finance.png';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  background-color: #faedfa; 
  padding-bottom: 5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  background-image: url(${finance});
  background-size: cover;
  margin-bottom: 50px;
  width: 200px;
  height: 200px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #8b008b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #a020a0;
  }
`;

export const TableContainer = styled.div`
  padding: 2rem; 
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  background-color: #faedfa; 
`;

export const TotalsContainer = styled.div`
  margin-bottom: 1rem; /* Espaço entre o total e a tabela */
  text-align: center;
  font-size: 1.2rem;
  p {
    margin: 5px 0;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  max-width: 1200px; /* Limita a largura máxima da tabela */
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  th {
    background-color: #f5f5f5;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
  }

  td {
    color: #555;
  }

  tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 0.5rem;
    }
  }
`;

export const FavoriteButton = styled.button`
  background-color: #e0f4ff;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b3e0ff;
  }

  svg {
    color: #1e90ff;
    font-size: 1.2rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;  /* Permite que os cards se reorganizem para baixo em telas menores */

  /* Alinhamento de cards na linha */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

interface CardProps {
  bgColor: string;
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) => props.bgColor || '#fff'}; /* Usando interpolação corretamente */
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  text-align: center;
  margin: 1rem;
  height: 80px;
  font-size: 1.2rem;

  p {
    margin: 5px 0;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    height: auto;
  }
`;

export const UploadContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const UploadButton = styled.div`
  display: inline-block;
  background-color: #4caf50;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  label {
    font-size: 16px;
  }

  &:hover {
    background-color: #45a049;
  }
`;

export const SuccessMessage = styled.p`
  margin-top: 20px;
  color: green;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

