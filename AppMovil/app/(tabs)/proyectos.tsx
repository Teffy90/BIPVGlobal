// app/tabs/ProjectsScreen.tsx
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
};

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
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