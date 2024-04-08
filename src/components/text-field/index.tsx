import { FormGroup, FormControl, Hint, Label } from './styles'

interface Props extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export default function TextField({label, ...props}: Props) {
  return (
    <FormGroup>
      <Label>
        <span>{label}</span>
        {props.type === 'password' && <a href="#">Esqueceu a senha?</a> }
      </Label>
      <FormControl>
        <input {...props}/>
        {props.type === 'password' && <div>
          {false && <i className="fa fa-eye icon"></i>}
          <i className="fa fa-eye-slash icon"></i>
        </div>}
      </FormControl>
      {false && <Hint>Digite um e-mail válido</Hint>}
    </FormGroup>
  )
}
