import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

import { IFormData } from "./types";
import { useAuth } from '../../hooks/useAuth';

const schema = yup
  .object({
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'A senha precisa de no mínimo 3 caracteres').required('Campo obrigatório'),
  })
  .required()

const Login = () => {

    const { handleLogin } = useAuth();

    const { control, handleSubmit, formState: { errors, isValid  } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    console.log(isValid, errors);

    const onSubmit = async (formData: IFormData) => {
        handleLogin(formData);
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} errorMessage={errors?.email?.message}/>
                    
                    <Input placeholder="Senha" type="password" leftIcon={<MdLock />} name="password" control={control} errorMessage={errors?.password?.message}/>
                    
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }