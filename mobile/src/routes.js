import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Incidents from "./pages/Incidents";
import IncidentDetail from "./pages/IncidentDetail";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Incidents" component={Incidents} />
        <Stack.Screen name="Detail" component={IncidentDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
