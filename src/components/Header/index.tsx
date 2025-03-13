import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';


const Header = () => {
  
  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <Wrapper>
      <Container>
          <Row>
            <Link to="/">
              <img src={logo} alt="Logo da dio"/>
            </Link>
            {user.id ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {user.id ? (
                <>
                <UserPicture src="https://avatars.githubusercontent.com/u/122945054?v=4"/>
                <a href='#' onClick={handleSignOut}>Sair</a>
                </>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Link to="/login">
                  <Button title="Entrar" />
                </Link>
                <Link to="/login">
                  <Button title="Cadastrar" />
                </Link>
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
