import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Intl from "intl";

import logoSrc from "../../../assets/logo.png";
import styles from "./styles";

const Incidents = () => {
  const navigation = useNavigation();

  const [incidents, setIncidents] = useState([]);
  const [incidentsTotal, setIncidentsTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadIncidents = async () => {
    const response = await api.get("/incidents", { params: { page } });

    if (loading) {
      return;
    }

    if (incidentsTotal > 0 && incidents.length === incidentsTotal) {
      return;
    }

    setLoading(true);

    if (response.data) {
      setIncidents([...incidents, ...response.data.inciddents]);
      setIncidentsTotal(response.headers["X-Total-Count"]);
      setPage(page + 1);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadIncidents();
  }, []);

  function navigateToDetail() {
    navigation.navigate("Detail");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoSrc}></Image>
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>{incidentsTotal}</Text>
          incidents
        </Text>
      </View>

      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>
        Choose one of the incidents below and save the day.
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={({ id }) => String(id)}
        showsVerticalScrollIndicator={false}
        onEndReached={() => loadIncidents()}
        renderItem={({ item: incident }) => (
          <View style={styles.incidentItem}>
            <Text style={styles.incidentKey}>Ong:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentKey}>Incident:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentKey}>Price:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(incident.price)}
            </Text>

            <TouchableOpacity
              style={styles.incidentDetailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.incidentDetailsButtonText}>Details</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Incidents;
