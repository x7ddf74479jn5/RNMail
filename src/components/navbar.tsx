import {Box, SafeAreaView} from "@/atoms"
import React from "react"
import {StyleSheet} from "react-native"

interface Props {
  children?: React.ReactNode
}

export const Navbar: React.FC<Props> = ({children}) => {
  ;<SafeAreaView
    backgroundColor="$navbarBackground"
    borderBottomColor="$navbarBorderBottom"
    borderBottomWidth={StyleSheet.hairlineWidth}>
    <Box minHeight={52} flexDirection="row" alignItems="center" px="md">
      {children}
    </Box>
  </SafeAreaView>
}
