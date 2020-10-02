import React, { useState } from "react";
import { Container, DropItem, Dropdown, Link } from "./styles";
import { useRouter } from "next/router";

export default function NavLink({ dropdown, title, path, icon }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Container>
      <Link
        onClick={
          dropdown !== false ? () => setOpen(!open) : () => router.push(path)
        }
      >
        {icon}
        {"    "}
        {title}
      </Link>
      <Dropdown className={open && "show"}>
        {dropdown !== false &&
          dropdown.map((item) => (
            <DropItem onClick={() => router.push(item.path)}>
              {item.icon}
              <span>{item.title}</span>
            </DropItem>
          ))}
      </Dropdown>
    </Container>
  );
}
