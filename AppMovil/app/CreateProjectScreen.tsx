// app/CreateProjectScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

// Colores
const colors = {
  primary: '#003A79',
  white: '#FFFFFF',
  gray: '#6B7073',
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
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
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
});

export default CreateProjectScreen;