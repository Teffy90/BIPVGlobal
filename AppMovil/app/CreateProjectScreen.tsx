import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importar el componente de degradado
import axios from 'axios'; // Para realizar las solicitudes HTTP
import { Picker } from '@react-native-picker/picker'; // Importar Picker correctamente

// Colores
const colors = {
  primary: '#003A79', // Azul Energía
  secondary: '#002A57', // Azul Profundo
  accent: '#609DE1', // Azul Claro
  white: '#FFFFFF',
  gray: '#6B7073', // Gris Corporativo
};

const CreateProjectScreen = () => {
  // Estado para los campos del formulario
  const [projectName, setProjectName] = useState('');
  const [selectedType, setSelectedType] = useState('fachada');
  const [material, setMaterial] = useState<string>('paneles');  // Tipo explícito string
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [inclination, setInclination] = useState('');
  const [azimuth, setAzimuth] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateProject = async () => {
    if (!projectName || !height || !width || !inclination || !azimuth) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    setIsLoading(true);

    // Aquí definimos la URL de la API y el cuerpo de la solicitud
    const apiUrl = `${process.env.BASE_URL}/api/projects`; // Asegúrate de definir BASE_URL en el entorno
    const projectData = {
      name: projectName,
      type: selectedType,
      material: material,
      height: height,
      width: width,
      inclination: inclination,
      azimuth: azimuth,
    };

    try {
      // Enviar la solicitud POST a la API para crear el proyecto
      const response = await axios.post(apiUrl, projectData);
      setIsLoading(false);

      // Si la solicitud fue exitosa, mostramos un mensaje
      if (response.status === 201) {
        Alert.alert('Proyecto Creado', `El proyecto "${projectName}" ha sido creado.`);
        // Limpiar los campos del formulario
        setProjectName('');
        setSelectedType('fachada');
        setMaterial('paneles');
        setHeight('');
        setWidth('');
        setInclination('');
        setAzimuth('');
      } else {
        Alert.alert('Error', 'No se pudo crear el proyecto.');
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al crear el proyecto. Intenta nuevamente.');
    }
  };

  return (
    <LinearGradient
      colors={[colors.primary, colors.accent]} // Degradado entre el azul oscuro y el azul claro
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Crear Proyecto</Text>

        {/* Nombre del Proyecto */}
        <TextInput
          style={styles.input}
          placeholder="Nombre del Proyecto"
          value={projectName}
          onChangeText={setProjectName}
        />

        {/* Tipo de Proyecto (Fachada o Techo - Radio Buttons) */}
        <View style={styles.radioGroup}>
          <Text style={styles.labelFt}>Fachada o Techo:</Text>
          
          <Pressable
            style={selectedType === 'fachada' ? styles.radioButtonSelected : styles.radioButton}
            onPress={() => setSelectedType('fachada')}
          >
            <Text style={selectedType === 'fachada' ? styles.radioTextSelected : styles.radioText}>Fachada</Text>
          </Pressable>

          <Pressable
            style={selectedType === 'techo' ? styles.radioButtonSelected : styles.radioButton}
            onPress={() => setSelectedType('techo')}
          >
            <Text style={selectedType === 'techo' ? styles.radioTextSelected : styles.radioText}>Techo</Text>
          </Pressable>
        </View>


        {/* Propiedades de Material (Lista Desplegable) */}
        <Text style={styles.label}>Propiedades de Material:</Text>
        <Picker
          selectedValue={material}
          style={styles.picker}
          onValueChange={(itemValue: string) => setMaterial(itemValue)} // Especificamos el tipo de itemValue
        >
          <Picker.Item label="Paneles" value="paneles" />
          <Picker.Item label="Vidrios" value="vidrios" />
          <Picker.Item label="Tejas" value="tejas" />
        </Picker>

        {/* Altura, Ancho, Inclinación, Azimuth */}
        <Text style={styles.label}>Dimensiones y orientación del proyecto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Altura (metros)"
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Ancho (metros)"
          value={width}
          onChangeText={setWidth}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Inclinación (°)"
          value={inclination}
          onChangeText={setInclination}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Azimuth (°)"
          value={azimuth}
          onChangeText={setAzimuth}
          keyboardType="numeric"
        />

        {/* Botón para crear el proyecto */}
        <Pressable
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleCreateProject}
          disabled={isLoading} // Deshabilitar el botón mientras se está creando el proyecto
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Creando...' : 'Crear Proyecto'}
          </Text>
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
  radioGroup: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  radioButton: {
    marginRight: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    backgroundColor: colors.white, // Fondo blanco para los botones no seleccionados
  },
  radioButtonSelected: {
    marginRight: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary, // Fondo azul para los botones seleccionados
    borderRadius: 5,
  },
  radioText: {
    color: colors.primary, // Color de texto para los botones no seleccionados
    fontWeight: 'bold',
  },
  radioTextSelected: {
    color: colors.white, // Color blanco para los botones seleccionados
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  labelFt: {
    fontSize: 16,
    color: colors.white,
    marginRight: 10,
    fontWeight: 'bold',
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
  buttonDisabled: {
    backgroundColor: '#8A8D94', // Color gris cuando está deshabilitado
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  picker: {
    height: 50, // Asegura que el Picker tenga suficiente altura
    width: '100%', // Asegura que el Picker ocupe todo el ancho disponible
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white, // Fondo blanco para el picker
    color: colors.primary, // Color del texto seleccionado
    marginBottom: 25,
    paddingHorizontal: 10,
  },
});

export default CreateProjectScreen;
