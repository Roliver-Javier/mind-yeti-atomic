
import styled from "styled-components";
import { flexbox, border, layout, space, color } from 'styled-system'


const Flex = styled.div`
    display:flex;
    //outline: 1px dashed gray;
    ${flexbox}
    ${layout}
    ${space}
    ${color}
    ${border}
`
Flex.defaultProps={
    flexDirection: 'column'
}
export default Flex;
