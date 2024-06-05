import { SliceZone } from "@prismicio/react"
import {
  getSlices,
  SliceSimulator,
  SliceSimulatorParams,
} from "@slicemachine/adapter-next/simulator"

import { components } from "../../slices"

export default function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const slices = getSlices(searchParams.state)

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  )
}
