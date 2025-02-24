// app/RecoverPasswordScreen.tsx
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
};

const RecoverPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleRecoverPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Por favor, ingresa tu correo electrónico.');
      return;
    }

    // Aquí puedes agregar la lógica para enviar la solicitud de recuperación de contraseña
    Alert.alert('Solicitud enviada', `Se ha enviado un enlace de recuperación a ${email}.`);
    // Navegar a la pantalla de inicio de sesión o a otra pantalla
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Pressable style={styles.button} onPress={handleRecoverPassword}>
        <Text style={styles.buttonText}>Enviar Enlace de Recuperación</Text>
      </Pressable>
      <View style={styles.linkContainer}>
        <Link href="/LoginScreen" asChild>
          <Pressable>
            <Text style={styles.linkText}>¿Ya tienes una cuenta? Inicia sesión</Text>
          </Pressable>
        </Link>
        <Link href="/RegisterScreen" asChild>
          <Pressable>
            <Text style={styles.linkText}>¿No tienes una cuenta? Regístrate</Text>
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

export default RecoverPasswordScreen;