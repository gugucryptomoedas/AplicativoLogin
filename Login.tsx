import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

type LoginProps = {
  irParaCadastro: () => void;
};

export default function Login({ irParaCadastro }: LoginProps) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const validar = () => {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return false;
    }

    if (!email.includes('@')) {
      Alert.alert('Erro', 'Email inválido');
      return false;
    }

    return true;
  };

  const entrar = () => {
    if (!validar()) return;

    Alert.alert('Sucesso', 'Login realizado!');
    setMensagem(`Bem-vindo(a), ${email}`);

    setEmail('');
    setSenha('');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>MeuApp</Text>

      <View style={styles.card}>
        <Text style={styles.titulo}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* SENHA COM OLHO */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            placeholderTextColor="#999"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
          />

          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Text style={styles.olho}>
              {mostrarSenha ? '🙈' : '👁️'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={entrar}>
          <Text style={styles.textoBotao}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={irParaCadastro}>
          <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
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
  olho: {
    fontSize: 18,
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