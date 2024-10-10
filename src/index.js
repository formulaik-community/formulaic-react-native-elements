
import Input from './input'
import Submit from './submit'
import Checkbox from './checkbox'
import Select from './select'
import TextArea from './textArea'
import Html from './html'
import Divider from './divider'
import Button from './button'
import SwitchControl from './switch'
import H1 from './h1'
import H2 from './h2'
import H3 from './h3'
import H4 from './h4'
import _containerVertical from './_containerVertical'
import _containerHorizontal from './_containerHorizontal'
import _buttonAdd from './_buttonAdd'

export default (props) => {
  const { type } = props
  switch (type) {
    case 'input':
      return Input
    case 'select':
      return Select
    case 'submit':
      return Submit
    case 'checkbox':
      return Checkbox
    case 'textArea':
      return TextArea
    case 'html':
      return Html
    case 'divider':
      return Divider
    case 'button':
      return Button
    case 'buttonGroup':
      return ButtonGroup
    case 'switch':
      return SwitchControl
    case 'h1':
      return H1
    case 'h2':
      return H2
    case 'h3':
      return H3
    case 'h4':
      return H4
    case '_containerVertical':
      return _containerVertical
    case '_containerHorizontal':
      return _containerHorizontal
    case '_buttonAdd':
      return _buttonAdd
    default:
      return null
  }
}

