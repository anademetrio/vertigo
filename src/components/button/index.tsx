import { ReactElement } from "react"
import { Btn } from "./styles"
type Props = {
  children: ReactElement | string
}
export default function Button({ children }: Props) {
  return (
    <Btn>{children}</Btn>
  )
}
