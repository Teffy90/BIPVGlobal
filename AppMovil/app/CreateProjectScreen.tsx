import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importar el componente de degradado

// Colores
const colors = {
  primary: '#003A79', // Azul Energía
  secondary: '#002A57', // Azul Profundo
  accent: '#609DE1', // Azul Claro
  white: '#FFFFFF',
  gray: '#6B7073', // Gris Corporativo
};

const CreateProjectScreen = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleCreateProject = () => {
    if (!projectName || !projectDescription) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes agregar la lógica para crear el proyecto
    Alert.alert('Proyecto creado', `El proyecto "${projectName}" ha sido creado.`);
    // Navegar a la pantalla de proyectos o a otra pantalla
  };

  return (
    <LinearGradient
      colors={[colors.primary, colors.accent]} // Degradado entre el azul oscuro y el azul claro
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Crear Proyecto</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del Proyecto"
          value={projectName}
          onChangeText={setProjectName}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción del Proyecto"
          value={projectDescription}
          onChangeText={setProjectDescription}
        />
        <Pressable style={styles.button} onPress={handleCreateProject}>
          <Text style={styles.buttonText}>Crear Proyecto</Text>
        </Pressable>
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
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: colors.white, // Título en blanco para resaltar
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: colors.secondary, // Sombra para resaltar el texto
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  input: {
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: colors.white, // Fondo blanco para los inputs
    opacity: 0.9, // Sutil opacidad para que no se mezcle tanto con el fondo
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
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});

export default CreateProjectScreen;
