import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { Container, Body, Content } from "./styles";

export default function Admin({ children }) {
  return (
    <Container>
      <Sidebar />
      <Body>
        <Topbar title={"Dashboard"} />
        <Content>{children}</Content>
      </Body>
    </Container>
  );
}
