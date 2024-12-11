// import React from 'react'

// const CriarDespesa = () => {
//     return (
//        <h1>
//         Criar Despesas
//        </h1>
//     )
// }

// export default CriarDespesa
import React, { useState } from 'react';
import * as S from "./styles";

const CriarDespesas = () => {
  const [form, setForm] = useState({
    descricao: "",
    categoria: "",
    valor: "",
    tipo: "entrada",
    data: "",
  });
  
  const [pdfFile, setPdfFile] = useState<File | null>(null); // Estado para armazenar o arquivo PDF
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controlar a mensagem de sucesso

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Dados enviados:", form);
    if (pdfFile) {
      console.log("Arquivo PDF selecionado:", pdfFile.name);
    }

    // Mostrar a mensagem de sucesso
    setIsSubmitted(true);

    // Esconder a mensagem após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);

    // Aqui futuramente será implementada a integração com o backend
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file); // Armazenar o arquivo PDF no estado
      alert(`PDF selecionado: ${file.name}`);
    } else {
      alert('Por favor, selecione um arquivo PDF.');
    }
  };

  return (
    <S.Container>
      <S.Title>Criar Nova Despesa</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
        />
        <S.Input
          name="categoria"
          placeholder="Categoria"
          value={form.categoria}
          onChange={handleChange}
        />
        <S.Input
          name="valor"
          placeholder="Valor"
          type="number"
          value={form.valor}
          onChange={handleChange}
        />
        <S.Select name="tipo" value={form.tipo} onChange={handleChange}>
          <option value="entrada">Entrada</option>
          <option value="saída">Saída</option>
        </S.Select>
        <S.Input
          name="data"
          placeholder="Data"
          type="date"
          value={form.data}
          onChange={handleChange}
        />
        
        {/* Botão para upload de PDF */}
        <S.UploadContainer>
          <S.UploadButton>
            <input
              type="file"
              accept="application/pdf"
              onChange={handlePdfUpload}
              style={{ display: 'none' }} // Ocultar o input file
            />
            <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
              Upload de Nota Fiscal.
            </label>
          </S.UploadButton>
        </S.UploadContainer>

        {/* Exibindo o nome do PDF selecionado */}
        {pdfFile && <p>PDF Selecionado: {pdfFile.name}</p>}

        {/* Exibir a mensagem de sucesso */}
        {isSubmitted && <S.SuccessMessage>Nota enviada com sucesso!</S.SuccessMessage>}

        <S.Button type="submit">Enviar</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default CriarDespesas;