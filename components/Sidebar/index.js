import React from "react";
import { Container, Header, Logo, Body, Footer, TextMuted } from "./styles";
import routes from "../../routes";
import Divider from "../Divider";
import NavLink from "../NavLink";
export default function Sidebar() {
  return (
    <Container>
      <Header>
        <Logo
          src="https://mindconsulting.com.br/wp-content/uploads/2020/01/Mind-Branco-copy.png"
          alt="Logo"
        />
      </Header>
      <Divider />
      <Body>
        {routes.protected.map((route) => (
          <NavLink
            title={route.title}
            icon={route.icon}
            dropdown={route.dropdown}
            path={route.path}
          />
        ))}
      </Body>
      <Footer>
        <TextMuted>Proudly developed by Mind Consulting</TextMuted>
      </Footer>
    </Container>
  );
}
