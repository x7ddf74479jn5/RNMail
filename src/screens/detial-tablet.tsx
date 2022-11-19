import FeatherIcon from "@/components/icon"
import {ThreeColumnLayoutProps} from "@/components/three-column-layout"
import React from "react"
import {TouchableOpacity} from "@/atoms"
import DetailScreen from "./detail"

type Props = ThreeColumnLayoutProps & {
  onDistractionFreeModeToggle: () => any
}

const DetailScreenForTablet: React.FC<Props> = props => {
  const {onDistractionFreeModeToggle, middleViewVisible} = props

  return (
    <DetailScreen
      renderNavBarLeft={() => (
        <TouchableOpacity
          onPress={onDistractionFreeModeToggle}
          flexDirection="row"
          alignItems="center"
          height="100%">
          <FeatherIcon
            name={middleViewVisible ? "maximize-2" : "minimize-2"}
            size={24}
          />
        </TouchableOpacity>
      )}
    />
  )
}

export default DetailScreenForTablet
