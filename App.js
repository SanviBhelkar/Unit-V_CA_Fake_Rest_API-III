import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Sample data
const gadgetsData = [
  { "id": 1, "name": "Smartphone", "brand": "Samsung", "price": 999 },
  { "id": 2, "name": "Laptop", "brand": "Apple", "price": 1499 },
  { "id": 3, "name": "Smartwatch", "brand": "Fitbit", "price": 199 }
];

// Main Screen component
const MainScreen = ({ navigation }) => {
  return (
    <FlatList
      data={gadgetsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('GadgetDetail', { gadget: item })}>
          <View style={{ padding: 10 }}>
            <Text>{item.name}</Text>
            <Text>Brand: {item.brand}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

// Drawer Navigator component
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainScreen} />
    </Drawer.Navigator>
  );
};

// App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="GadgetDetail" component={GadgetDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
