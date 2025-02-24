import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
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

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Solar Costing App</Text>
      <Text style={styles.description}>
        Esta aplicación te permite calcular los costos de instalación de paneles solares y
        explorar los beneficios de la energía solar. Regístrate o inicia sesión para comenzar.
      </Text>
      <Link href="/LoginScreen" asChild>
        <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </Pressable>
      </Link>
      <Link href="/RegisterScreen" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
          </Pressable>
      </Link>
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
  description: {
    fontSize: 16,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: 40,
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
export default HomeScreen;