import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type CadastroProps = {
    voltarParaLogin: () => void;
};

function Cadastro({ voltarParaLogin }: CadastroProps) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const cadastrar = () => {

        console.log('Dados cadastrados', { nome, email, senha });
        setMensagemSucesso('Cadastro realizado com sucesso!');
        setNome('');
        setEmail(''),
            setSenha('');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
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
            />
            <View style={styles.botao}>
                <Button title="Cadastrar" onPress={cadastrar} />
            </View>
            {/* Botão para voltar para o login */}
            <View style={styles.botao}>
                <Button title="Voltar para Login" onPress={voltarParaLogin} />
            </View>
            {/* Mostrar mensagem de sucesso, somente quando houver texto */}
            {mensagemSucesso ? (
                <Text style={styles.mensagemSucesso}>{mensagemSucesso}</Text>
            ) : null}
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
        padding: 12,
        marginBottom: 12,
        borderRadius: 8

    },
    botao: {
        width: '100%',
        marginTop: 8,

    },
    mensagemSucesso: {
        marginTop: 16,
        color: '#1f7a1f',
        fontWeight: '600',

    },
})
export default Cadastro;

