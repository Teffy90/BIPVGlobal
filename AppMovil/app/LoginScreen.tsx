// app/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { Link } from 'expo-router'; // Asegúrate de tener expo-router instalado

// Colores
const colors = {
  primary: '#003A79',
  secondary: '#002A57',
  accent: '#609DE1',
  white: '#FFFFFF',
  gray: '#6B7073',
  lightGray: '#D3D3D3',
  green: '#228B22',
};

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para iniciar sesión
    // Por ejemplo, llamar a una API para autenticar al usuario
    if (email && password) {
      Alert.alert('Inicio de sesión exitoso', `Bienvenido, ${email}!`);
      // Navegar a la pantalla principal o de proyectos
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>
      <View style={styles.linkContainer}>
        <Link href="/RegisterScreen" asChild>
          <Pressable>
            <Text style={styles.linkText}>¿No tienes una cuenta? Regístrate</Text>
          </Pressable>
        </Link>
        <Link href="/RecoverPasswordScreen" asChild>
          <Pressable>
            <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
          </Pressable>
        </Link>
        <Link href="/" asChild>
          <Pressable>
            <Text style={styles.linkText}>Inicio</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: colors.accent,
    fontSize: 16,
    marginVertical: 5,
  },
});

export default LoginScreen;