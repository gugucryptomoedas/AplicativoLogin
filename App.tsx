import React, { useState } from "react";
import Login from "./Login";
import Cadastro from "./Cadastro";

export default function App() {
  const [tela, setTela] = useState<'login' | 'cadastro'>('login');

  return tela === 'login' ? (
    <Login irParaCadastro={() => setTela('cadastro')} />
  ) : (
    <Cadastro voltarParaLogin={() => setTela('login')} />
  );
}