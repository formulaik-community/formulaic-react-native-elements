import Input from './input'
import InputPassword from './inputPassword'
import Submit from './submit'
import Html from './html'
import H1 from './h1'
import H2 from './h2'
import H3 from './h3'
import H4 from './h4'
import _buttonAdd from './_buttonAdd'

export default (props) => {
  const { type } = props
  switch (type) {
    case 'input':
      return Input
    case 'inputPassword':
      return InputPassword
    case 'submit':
      return Submit
    case 'html':
      return Html
    case 'h1':
      return H1
    case 'h2':
      return H2
    case 'h3':
      return H3
    case 'h4':
      return H4
    case '_buttonAdd':
      return _buttonAdd
    default:
      return null
  }
}

