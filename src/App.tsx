import { Container, Content, Image, Box, BoxContent, Title, Space } from './styles'
import Img from './assets/img.jpg'
import Logo from './assets/logo.png'
import TextField from './components/text-field'
import Button from './components/button'

export default function App() {
  return (
    <Container>
      <Box>
        <BoxContent>
          <img src={Logo} alt="" height="54px" />
          <div className='box-content-body'>
            <Title>Acesse a plataforma</Title>
            <div>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</div>
            <form>
              <TextField type='text' placeholder='Digite seu e-mail' label='E-mail' id='email' name='email' />
              <TextField type='password' placeholder='Digite sua senha' label='Senha' id='password' name='password' />
              <Space />
              <Button>Entrar</Button>
            </form>
            <Space />
            <div className='info-register'>Ainda não tem uma conta? <a href="#">Inscreva-se</a></div>
          </div>
        </BoxContent>
      </Box>
      <Content>
        <Image src={Img} alt="" />
      </Content>
    </Container>
  )
}
