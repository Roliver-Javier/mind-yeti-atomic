import styled from 'styled-components'
import Variants, { Sizes, Appareance } from './styleMixin'
import { color } from 'styled-system'
import PropTypes from 'prop-types'

const Button = styled.button`
  ${Variants}
  ${Sizes}
  ${Appareance}
  ${color}
`
Button.defaultProps = {
  variant: 'default',
  size: 'sm',
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'rounded', 'blank', 'active']),
  size: PropTypes.oneOf(['xs','sm','lg']),
  appareance: PropTypes.oneOf(['outline']),
}
export default Button;
