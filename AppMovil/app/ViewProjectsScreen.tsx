import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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

// Definir el tipo para cada proyecto
interface Project {
  id: string;
  name: string;
  description: string;
}

// Datos de ejemplo para los proyectos
const projects: Project[] = [
  { id: '1', name: 'Proyecto Solar Casa 1', description: 'Instalación de paneles solares en la casa de Juan.' },
  { id: '2', name: 'Proyecto Solar Oficina', description: 'Instalación de paneles solares en la oficina de María.' },
  { id: '3', name: 'Proyecto Solar Casa 2', description: 'Instalación de paneles solares en la casa de Pedro.' },
];

const ViewProjectsScreen = () => {
  const renderItem = ({ item }: { item: Project }) => (
    <View style={styles.projectItem}>
      <Text style={styles.projectName}>{item.name}</Text>
      <Text style={styles.projectDescription}>{item.description}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={[colors.primary, colors.accent]} // Degradado entre el azul oscuro y el azul claro
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Proyectos Existentes</Text>
        <Text style={styles.description}>
          Aquí puedes ver la lista de proyectos que has creado.
        </Text>
        <FlatList
          data={projects}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white, // Color blanco para el título
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: colors.secondary, // Sombra para resaltar el texto
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  description: {
    fontSize: 16,
    color: colors.white, // Color blanco para la descripción
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  projectItem: {
    backgroundColor: colors.white,
    borderRadius: 10, // Bordes más redondeados
    padding: 20,
    marginVertical: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5, // Aumentamos la sombra para más profundidad
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, // Aumento de la elevación en Android
    borderWidth: 1, // Borde sutil para las tarjetas
    borderColor: colors.accent, // Color de borde con un toque de acento
  },
  projectName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8, // Espacio entre el nombre y la descripción
  },
  projectDescription: {
    fontSize: 14,
    color: colors.gray,
  },
});

export default ViewProjectsScreen;
