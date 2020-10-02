import React from "react";
import { Container, PageTitle, User, Name, Avatar, Logout } from "./styles";
import { useRouter } from "next/router";
import { ImExit } from "react-icons/im";
export default function Topbar() {
  const router = useRouter();
  const title = router.pathname.split("/");
  return (
    <Container>
      <PageTitle>{title[title.length - 1]}</PageTitle>
      <User>
        <Name>Breno Galendi</Name>
        <Avatar />
        <Logout onClick={() => router.push("/login")}>
          Sair {"   "} <ImExit />
        </Logout>
      </User>
    </Container>
  );
}
