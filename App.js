import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import Favourite from './screens/Favourite';
import { Ionicons } from '@expo/vector-icons'
import Favouritecontextprovider from './store/context/favourite-context';


const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function Drawernavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#351401'
      },
      headerTintColor: 'white',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25'
      },
      drawerContentStyle: {
        backgroundColor: '#351401'
      },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: "All Categories",
        drawerIcon: ({ color, size }) => (
          <Ionicons name="list" color={color} size={size} />
        )
      }} />
      <Drawer.Screen name="Favourite" component={Favourite} options={{
        title: "All Categories",
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        )
      }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      <Favouritecontextprovider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#351401'
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f2f25'
            },
          }}>
            <Stack.Screen name="Meal Categories" component={Drawernavigator} options={{
              headerShown: false
            }} />
            <Stack.Screen name="MealOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Favouritecontextprovider>
    </>
  );
}

const styles = StyleSheet.create({

});
