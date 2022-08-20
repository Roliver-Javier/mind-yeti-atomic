import { variant } from 'styled-system'

export const Size = ({lineHeight, uppercase, fontSize, color, fontWeigth, appareance, theme,...rest }) => {

    const { colors, fontWeights,lineHeights, fontSizes } = theme;
  
    const primaryColor = !color && appareance === 'primary' ? colors.primary : null
    const secondaryColor = !color && appareance === 'secondary' ? `${colors.secondary} !important` : null
    const defaultStyle = {
        color: primaryColor ? primaryColor : secondaryColor  || `${color} !important`,
        'font-weight': fontWeigth || fontWeights[3],
        'line-height': lineHeight || lineHeights[1],
        ...(uppercase && { 'text-transform': 'uppercase' }),
        margin:0,
        padding: 0,
    }
    return variant({
        prop: 'size', 
        variants: {
            h1: {
                ...defaultStyle,
                'font-size': fontSize || fontSizes[6],
            },
            h2: {
                ...defaultStyle,
                'font-size': fontSize || fontSizes[5],
            },
            h3: {
                ...defaultStyle,
                'font-size': fontSize || fontSizes[4],
            },
            h4: {
                ...defaultStyle,
                'font-size': fontSize || fontSizes[3],
            },
            sm:{
                ...defaultStyle,
                "font-size": fontSize || fontSizes[2],
                'font-weight': fontWeigth || fontWeights[2],
                color: appareance === 'primary'? 'rgb(64,77,96)':'#03BFCB !important',
            },
            normal:{
                ...defaultStyle,
                "font-size": `${fontSize} !important` || fontSizes[1],
                'font-weight': `${fontWeigth} !important` || fontWeights[0],
                color: color ? `${color} !important` : appareance === 'primary' ? 'rgb(64,77,96)' : '#03BFCB !important'  
            },
            active: {
                ...defaultStyle,
                color: 'rgb(64, 77, 96)',
                "font-size": fontSize || fontSizes[1],
                'font-weight': fontWeigth || fontWeights[1],
                "&:hover":{
                    color: '#03BFCB !important'
                }
            }
            
            
        }
    })
} 

export default Size