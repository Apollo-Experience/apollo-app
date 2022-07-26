import * as React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import styles from "./style.js";
import {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";

function Dashboard() {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.text}>Dashboard!</Text>
    </View>
  );
}

function Favorites() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Favorites!</Text>
    </View>
  );
}

function Calendar() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Calendar!</Text>
    </View>
  );
}

function Search() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function Guias() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#f0edf6"
      inactiveColor="#989898"
      labeled={false}
      shifting={true}
      barStyle={{ backgroundColor: "#121212" }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => (
            <AntDesign name="star" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color }) => (
            <Entypo name="calendar" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Home() {
  return <Guias />;
}
export default Home;
