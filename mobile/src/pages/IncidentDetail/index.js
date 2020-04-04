import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";

import { Feather } from "@expo/vector-icons";
import logoSrc from "../../../assets/logo.png";

import styles from "./styles";

export default function IncidentDetail() {
  const navigation = useNavigation();
  const routes = useRoute();

  const incident = routes.params.incident;

  const message = `Hello Ong, I'm getting in touch`;

  function navigateToProfile() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: "Hero: test",
      recipients: ["matheusvieiracoelho@gmail.com"],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoSrc}></Image>
        <TouchableOpacity
          style={styles.incidentDetailsButton}
          onPress={navigateToProfile}
        >
          <Feather name="arrow-left" size={24} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incidentItem}>
        <Text style={[styles.incidentKey, { marginTop: 0 }]}>Ong:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentKey}>Description:</Text>
        <Text style={styles.incidentValue}>Puppy was hit by a car</Text>

        <Text style={styles.incidentKey}>Price:</Text>
        <Text style={styles.incidentValue}>$ 42</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this incident</Text>

        <Text style={styles.heroDescription}>Get in touch</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
