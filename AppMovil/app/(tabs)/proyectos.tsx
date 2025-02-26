import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Asegúrate de tener expo-router instalado
import { LinearGradient } from 'expo-linear-gradient'; // Importar el componente de degradado

// Colores
const colors = {
  primary: '#003A79', // Azul Energía
  secondary: '#002A57', // Azul Profundo
  accent: '#609DE1', // Azul Claro
  white: '#FFFFFF',
  gray: '#6B7073', // Gris Corporativo
  lightGray: '#D3D3D3',
};

const ProjectsScreen = () => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.accent]} // Degradado entre el azul y azul claro
      style={styles.container}
    >
      <Text style={styles.title}>Proyectos</Text>
      <Text style={styles.description}>
        Aquí puedes gestionar tus proyectos de instalación de paneles solares.
      </Text>
      <View style={styles.buttonContainer}>
        <Link href="/CreateProjectScreen" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Crear Proyecto</Text>
          </Pressable>
        </Link>
        <Link href="/ViewProjectsScreen" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Ver Proyectos</Text>
          </Pressable>
        </Link>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white, // Color blanco para el título
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: colors.white, // Color blanco para la descripción
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProjectsScreen;
