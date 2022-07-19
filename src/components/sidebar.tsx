import {Box, Text} from "@/atoms"
import BookList from "@/components/book-list"
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
        <Text variant="sidebar" m="lg">
          Good
        </Text>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  )
}

export default Sidebar
