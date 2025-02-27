import React from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

// Colores
const colors = {
  primary: '#003A79', // Azul Energía
  secondary: '#002A57', // Azul Profundo
  accent: '#609DE1', // Azul Claro
  white: '#FFFFFF',
  gray: '#6B7073', // Gris Corporativo
  lightGray: '#D3D3D3', // Gris Claro
  green: '#228B22', // Verde Sostenibilidad
};

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/solar-background.jpg')} // Ruta correcta de la imagen
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
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
          <Pressable style={[styles.button, styles.secondaryButton]}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlay: {
    position: 'absolute', // Asegura que el overlay cubra toda la imagen
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semi-transparente
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Montserrat', // Ya cargada en RootLayout
    color: colors.white, // Cambié el color del texto a blanco para hacerlo más visible
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: colors.secondary, // Sombra para que resalte mejor
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Roboto', // Ya cargada en RootLayout
    color: colors.white,
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Montserrat', // Ya cargada en RootLayout
  },
});

export default HomeScreen;
