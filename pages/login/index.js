import React from "react";
import Divider from "../../components/Divider";
import {
  Container,
  Card,
  Welcome,
  Logo,
  Text,
  LoginForm,
  Link,
  CustomButton,
  TextMuted,
  Image,
} from "./styles";
import PrimaryInput from "../../components/PrimaryInput";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <Container>
      <Card>
        <Welcome>
          <Logo
            src="https://mindconsulting.com.br/wp-content/uploads/2020/01/Mind-Branco-copy.png"
            alt="Logo"
          />
          <Text>Faça seu login para acessar a aplicação!</Text>
          <Image src="/bear.png" />
        </Welcome>
        <LoginForm>
          <form>
            <PrimaryInput placeholder="E-mail" />
            <PrimaryInput placeholder="Senha" />
          </form>
          <Link>Esqueceu sua senha?</Link>
          <CustomButton onClick={() => router.push("/dashboard")}>
            ENTRAR
          </CustomButton>
          <Divider />
          <TextMuted>
            Não possui conta? {"    "}
            <Link> Cadastre-se aqui!</Link>
          </TextMuted>
        </LoginForm>
      </Card>
    </Container>
  );
}
