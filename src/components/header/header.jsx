import S from "./header.module.scss";
import logo from "../../assets/logo.png";
import busca from "../../assets/busca.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function header() {
  return (
    <BrowserRouter>
      <header>
        <section className={S.boxLogo}>
          <img src={logo} alt="Logo Livro" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxNavigation}>
          <ul>
            <li>Início</li>
            <li>Livros Doados</li>
            <li>Quero Doar</li>
          </ul>
        </nav>
        <div className={S.boxSearch}>
          <input type="text" placeholder="O que você procura?" />
          <img src={busca} alt="Logo de Buscar" />
        </div>
      </header>
    </BrowserRouter>
  );
}
