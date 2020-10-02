import React from "react";

// Icons
import { FaTachometerAlt, FaUserCog, FaList } from "react-icons/fa";

const routes = {
  protected: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
      dropdown: false,
    },
    {
      title: "Categorias",
      icon: <FaList />,
      dropdown: [
        {
          title: "Categorias",
          path: "/dashboard/categorias",
          icon: <FaList />,
        },
        {
          title: "Categorias",
          path: "/dashboard/categorias",
          icon: <FaList />,
        },
        {
          title: "Categorias",
          path: "/dashboard/categorias",
          icon: <FaList />,
        },
      ],
    },
    {
      title: "Usuários",
      path: "/dashboard/usuarios",
      icon: <FaUserCog />,
      dropdown: false,
    },
  ],
  public: [
    {
      path: "/login",
      icon: "",
    },
    {
      path: "/",
      icon: "",
    },
    {
      path: "/home",
      icon: "",
    },
    {
      path: "/parceiros",
      icon: "",
    },
    {
      path: "/novo-parceiro",
      icon: "",
    },
    {
      path: "/politica-privacidade",
      icon: "",
    },
  ],
};
export default routes;
