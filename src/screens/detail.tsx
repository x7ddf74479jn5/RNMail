import {Box, Container, Text, TouchableOpacity} from "@/atoms"
import FeatherIcon from "@/components/icon"
import {Navbar} from "@/components/navbar"
import {RootStackParamList} from "@/navs"
import {editingNoteIdAtom} from "@/states/editor"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {useAtom} from "jotai"
import React, {useCallback} from "react"

type Props = {navigation: NativeStackScreenProps<RootStackParamList>}

const DetailScreen: React.FC<Props> = ({navigation}) => {
  const [editingNoteId] = useAtom(editingNoteIdAtom)
  const handleBackPress = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <Container>
      <Navbar>
        <TouchableOpacity onPress={handleBackPress}>
          <FeatherIcon name="arrow-left" size={24} />
        </TouchableOpacity>
        <Box flex={1}>
          <Text variant="navbar" textAlign="center">
            Editor
          </Text>
        </Box>
        <Box width={36} />
      </Navbar>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text m="lg" fontSize={24}>
          Editing Note ID: {editingNoteId}
        </Text>
      </Box>
    </Container>
  )
}

export default DetailScreen
