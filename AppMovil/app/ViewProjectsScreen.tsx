// app/ViewProjectsScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Colores
const colors = {
  primary: '#003A79',
  white: '#FFFFFF',
  gray: '#6B7073',
  lightGray: '#D3D3D3',
};

// Datos de ejemplo para los proyectos
const projects = [
  { id: '1', name: 'Proyecto Solar Casa 1', description: 'Instalación de paneles solares en la casa de Juan.' },
  { id: '2', name: 'Proyecto Solar Oficina', description: 'Instalación de paneles solares en la oficina de María.' },
  { id: '3', name: 'Proyecto Solar Casa 2', description: 'Instalación de paneles solares en la casa de Pedro.' },
];

const ViewProjectsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.projectItem}>
      <Text style={styles.projectName}>{item.name}</Text>
      <Text style={styles.projectDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
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
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  projectItem: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  projectDescription: {
    fontSize: 14,
    color: colors.gray,
  },
});

export default ViewProjectsScreen;