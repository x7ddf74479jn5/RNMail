import {Box} from "@/atoms"
import BookList from "@/components/book-list"
import PandasharkLogo from "@/components/pandashark-logo"
import {DrawerContentComponentProps} from "@react-navigation/drawer"
import React, {useCallback} from "react"
import {SafeAreaView} from "react-native"

const Sidebar: React.FC<DrawerContentComponentProps> = ({navigation}) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Box
          alignItems="flex-start"
          pl="md"
          pb="sm"
          mt="xs"
          borderBottomColor="$sidebarSeparator"
          borderBottomWidth={1}>
          <PandasharkLogo width={128} height={36} color="black" />
        </Box>{" "}
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  )
}

export default Sidebar
