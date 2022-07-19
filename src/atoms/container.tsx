import {Box} from "@/atoms"
import {Theme} from "@/themes"
import {BoxProps} from "@shopify/restyle"
import * as React from "react"

type ContainerProps = BoxProps<Theme> & {children: React.ReactNode}

const Container: React.FC<ContainerProps> = ({children, ...props}) => (
  <Box {...props} flex={1} backgroundColor="$background">
    {children}
  </Box>
)

export default Container
