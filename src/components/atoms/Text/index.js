import styled from "styled-components";
import { typography, color, layout} from 'styled-system'
import { Size } from './styleMixin'

const Text = styled.p`
    ${typography}
    ${Size}
    ${color}
    ${layout}
`

Text.defaultProps = {
    size: 'normal',
    appareance: 'primary'
}

export default Text;
