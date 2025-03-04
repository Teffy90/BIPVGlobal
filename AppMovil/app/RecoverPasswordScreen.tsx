import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
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
    <LinearGradient
      colors={[colors.primary, colors.accent]} // Degradado entre el azul y azul claro
      style={styles.container}
    >
      <View style={styles.overlay}>
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
    color: colors.white, // Color blanco para el texto
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
  linkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: colors.white, // Color blanco para los enlaces
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'Roboto',
    textDecorationLine: 'underline', // Subrayamos los enlaces para hacerlos más visibles
    fontWeight: 'bold', // Hacemos que los enlaces sean más prominentes
    marginBottom: 10, // Añadimos un poco de espacio entre los enlaces
  },
});

export default RecoverPasswordScreen;
