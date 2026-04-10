import React from "react";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
 
 
type LoginProps = {
    irParaCadastro: () => void;
};
 
function Login ({irParaCadastro }: LoginProps) {
 
    const [email, setEmail] = useState('');
 
    const [senha, setSenha] = useState('');
 
    const [mensagem, setMensagem] = useState('');
 
    const entrar = () => {
 
        console.log('Tentando login com:', {email, senha});
 
        Alert.alert('Login', 'Botão entrar clicado com sucesso!')
 
        setMensagem(`Bem-vindo(a)! login tentando com o email: ${email}`)
    }
 
 
    return (
 
        <View style={styles.container}>
        <Text style={styles.titulo}>Login</Text>
 
        <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        /> <View style={styles.botao}>
            <Button title="Entrar" onPress={entrar}/>
        </View>
        <View style={styles.botao}>
        <Button title="Ir para Cadastro" onPress={irParaCadastro}/>
        </View>
        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
       
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
 
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#cccccccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
 
    },
    botao: {
        width: '100%',
        marginTop: 8,
 
    },
    mensagem: {
        marginTop: 16,
        textAlign: 'center',
        color: '#1f7a1f',
 
    },
});
export default Login;