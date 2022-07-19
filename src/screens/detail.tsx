import {Box, Text, TouchableOpacity} from "@/atoms"
import {RootStackParamList} from "@/navs"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import React from "react"

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, "Detail">

const DetailScreen: React.FC<DetailScreenProps> = ({navigation, route}) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Detail Screen</Text>
      <Text m="lg">{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{padding: 12}}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </Box>
  )
}

export default DetailScreen
