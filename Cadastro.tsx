import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

type CadastroProps = {
  voltarParaLogin: () => void;
};

export default function Cadastro({ voltarParaLogin }: CadastroProps) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  const [mensagem, setMensagem] = useState('');

  const validar = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return false;
    }

    if (!email.includes('@')) {
      Alert.alert('Erro', 'Email inválido');
      return false;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return false;
    }

    return true;
  };

  const cadastrar = () => {
    if (!validar()) return;

    Alert.alert('Sucesso', 'Cadastro realizado!');
    setMensagem(`Conta criada para ${nome}`);

    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>MeuApp</Text>

      <View style={styles.card}>
        <Text style={styles.titulo}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        {/* SENHA */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Text>{mostrarSenha ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        {/* CONFIRMAR SENHA */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry={!mostrarConfirmar}
          />
          <TouchableOpacity onPress={() => setMostrarConfirmar(!mostrarConfirmar)}>
            <Text>{mostrarConfirmar ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={cadastrar}>
          <Text style={styles.textoBotao}>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={voltarParaLogin}>
          <Text style={styles.link}>Já tem conta? Voltar para login</Text>
        </TouchableOpacity>

        {mensagem ? (
          <Text style={styles.mensagem}>{mensagem}</Text>
        ) : null}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2971b8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  inputSenha: {
    flex: 1,
    padding: 12,
  },
  botao: {
    backgroundColor: '#1E90FF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    textAlign: 'center',
    color: '#1E90FF',
  },
  mensagem: {
    marginTop: 15,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  },
});