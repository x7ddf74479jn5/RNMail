import {Box, Container, Text} from "@/atoms"
import {Navbar} from "@/components/navbar"
import {editingNoteIdAtom} from "@/states/editor"
import {useAtom} from "jotai"
import React from "react"

type Props = {
  renderNavBarLeft: () => React.ReactNode
}

const DetailScreen: React.FC<Props> = props => {
  const {renderNavBarLeft} = props
  const [editingNoteId] = useAtom(editingNoteIdAtom)

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
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text m="lg" fontSize={24}>
          Editing Note ID: {editingNoteId}
        </Text>
      </Box>
    </Container>
  )
}

export default DetailScreen
