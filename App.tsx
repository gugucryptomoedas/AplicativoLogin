import React from "react"; // Importar para criar componentes
import { useState } from "react"; // Importar para guardar e atualizar estados
import { SafeAreaView, SafeAreaViewBase, StyleSheet } from "react-native"; // Importa componentes visuais
import Login from "./Login";
import Cadastro from "./Cadastro";
 
function App() { // Componente principal
  //useState criar uma variavel de estado chamada telaAtual  
  //Ela começa com valor "login"
  //SetTelaAtual é usada para trocar o valor
  const [telaAtual, setTelaAtual] =  useState<'login' | 'cadastro'>('login');
 
 
 // Esta função muda a tela atual para "cadastro"
 const irParaCadastro = () => {
    setTelaAtual('cadastro');
 };
 
 const voltarParaLogin = () => {
  setTelaAtual('login');
 };
 
 return (
  <SafeAreaView>
   {/* {Navegação manual:
   Se a telaAtual for "login", mostra a tela login
   Se não for, mostra a tela Cadastro.
   Isso substitui o uso de bibliotecas de navegação neste exemplo.
   } */}
{telaAtual === 'login' ? (
   //Passa a função irParaCadastro como prop para o componente login
   <Login irParaCadastro={irParaCadastro} />
): (
   //Passa a função VoltarParaLogin como prop para o componente cadastro
      <Cadastro voltarParaLogin ={voltarParaLogin} />
)}
  </SafeAreaView>
 );
}
 
//Criar os estilos do componente
const styles = StyleSheet.create({
  //Estilo principal da tela.
  container: {
    //Faz a tela ocupar todo o espaço disponivel
    flex: 1,
    //Fundo branco para ar visual limpo
    backgroundColor: '#ffffff'
  }
});
 
//Exporta o componente App para ser usado como entrada do projeto
export default App;