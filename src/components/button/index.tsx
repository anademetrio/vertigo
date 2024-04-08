import { ReactElement } from "react"
import { Btn } from "./styles"
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement | string
}
export default function Button({ children, ...props }: Props) {
  return (
    <Btn {...props}>{children}</Btn>
  )
}
