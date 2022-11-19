import FeatherIcon from "@/components/icon"
import {RootStackParamList} from "@/navs"
import {useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {useCallback} from "react"
import {TouchableOpacity} from "react-native-gesture-handler"
import DetailScreen from "./detail"

type Props = {}

const DetailScreenForPhone: React.FC<Props> = _props => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const handleBackPress = useCallback(() => {
    navigation.goBack()
  }, [])

  return (
    <DetailScreen
      renderNavBarLeft={() => (
        <TouchableOpacity onPress={handleBackPress}>
          <FeatherIcon name="arrow-left" size={24} />
        </TouchableOpacity>
      )}
    />
  )
}

export default DetailScreenForPhone
