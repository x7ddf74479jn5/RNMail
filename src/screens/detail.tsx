import {Box, Container, Text, ScrollView} from "@/atoms"
import {Navbar} from "@/components/navbar"
import {editingNoteIdAtom} from "@/states/editor"
import {useAtom} from "jotai"
import React from "react"
import NOTES from "@/fixtures/notes"

type Props = {
  renderNavBarLeft: () => React.ReactNode
}

const DetailScreen: React.FC<Props> = props => {
  const {renderNavBarLeft} = props
  const [editingNoteId] = useAtom(editingNoteIdAtom)
  const note = NOTES.find(n => n.id === editingNoteId)

  return (
    <Container>
      <Navbar>
        {renderNavBarLeft()}
        <Box flex={1}>
          <Text variant="navbar" textAlign="center">
            Editor
          </Text>
        </Box>
        <Box width={36} />
      </Navbar>
      <ScrollView flex={1} p="sm">
        <Text fontWeight="bold" m="sm" fontSize={24}>
          {note?.title}
        </Text>
        <Text m="sm" fontSize={20}>
          {note?.body}
        </Text>
      </ScrollView>
    </Container>
  )
}

export default DetailScreen
