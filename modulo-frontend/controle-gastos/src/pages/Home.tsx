// import React from 'react'
// import { Container, Title, Subtitle, ImageContainer } from './styles'

// const Home = () => {
//     return (
//         <Container>
//             <ImageContainer />
//             <Title>Domine suas finanças com a Gemini.</Title>
//             <Subtitle>Uma visão clara de suas finanças para tomar decisões financeiras mais inteligentes e alcançar seus objetivos financeiros mais rapidamente.</Subtitle>
//         </Container>
//     )
// }

// export default Home

import React from 'react';
import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <S.ImageContainer />
      <S.Title>Domine suas finanças com a Gemini.</S.Title>
      <S.Subtitle>
        Uma visão clara de suas finanças para tomar decisões financeiras mais
        inteligentes e alcançar seus objetivos financeiros mais rapidamente.
      </S.Subtitle>
    </S.Container>
  );
};

export default Home;