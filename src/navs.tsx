import * as React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createDrawerNavigator} from "@react-navigation/drawer"
import MainScreen from "@/screens/main"
import Sidebar from "@/components/sidebar"
import {NavigatorScreenParams} from "@react-navigation/native"
import DetailScreen from "@/screens/detail"
import {useDrawerEnabled} from "./hooks/use-drawer-enabled"

export type HomeDrawerParamList = {
  Main: {}
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>
  Detail: {
    noteId: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<HomeDrawerParamList>()

function Home() {
  const swipeEnabled = useDrawerEnabled()

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: "back",
        swipeEdgeWidth: 200,
        swipeEnabled,
      }}
      drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  )
}

export default function Navigations() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={DetailScreen} options={{}} />
    </Stack.Navigator>
  )
}
