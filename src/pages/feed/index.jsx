import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING TOP 5 DA SEMANA </TitleHighlight>
                <UserInfo nome="Bianca Soares" image="https://avatars.githubusercontent.com/u/122945054?v=4" percentual={25}/>
                <UserInfo nome="Bianca Soares" image="https://avatars.githubusercontent.com/u/122945054?v=4" percentual={65}/>
                <UserInfo nome="Bianca Soares" image="https://avatars.githubusercontent.com/u/122945054?v=4" percentual={45}/>
                <UserInfo nome="Bianca Soares" image="https://avatars.githubusercontent.com/u/122945054?v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
