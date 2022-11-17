import {Box, Text} from "@/atoms"
import React from "react"

type Props = {}

export const NoteListHeaderTitleBar = (_props: Props) => {
  return (
    <Box
      px="md"
      py="sm"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center">
      <Text
        ml="xs"
        mr="md"
        fontWeight="bold"
        fontSize={14}
        numberOfLines={1}
        ellipsizeMode="middle">
        All Notes
      </Text>
    </Box>
  )
}
