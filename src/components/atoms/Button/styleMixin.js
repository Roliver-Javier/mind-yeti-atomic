import { variant} from 'styled-system'

export const Variants = () => {
    const defaultStyle = {
        color: '#fff',  
        'border-radius': '3px',
        display: 'flex',
        'text-decoration': 'none',
        'border-style': 'solid',
        'border-width':'1px',
        position: 'relative',
        cursor: 'pointer',
        outline: 'none',
        'text-align': 'center',
        'transition': 'all .5s',
        'font-weight': '600 !important', 
        'min-width': 'max-content', 
        'background-color': '#03BFCB', //Should be defined by the theme object
        'border-color': '#03BFCB',  //Should be defined by the theme object
        '&:hover': {
            'border-color':'rgb(0, 71, 103)',
            'background-color': 'rgb(0, 71, 103)',
            'box-shadow': '0 12px 24px -10px rgba(21, 59, 93, 0.46)',
            'transform': 'scale(.95)'
        },
        'justify-content': 'center',
        'p:nth-child(1)': {
            'padding-right': '10px'
        }
    }
    return variant({
        variants: {
            default: {
                ...defaultStyle
            },
            active: {
                ...defaultStyle,
                border: 'none',
                'outline':'1px solid rgb(0,71,103)',
                color: 'rgb(0, 71, 103) !important',
               
                
            },
            rounded: {
                ...defaultStyle,
                'border-radius': '100px'
            },
            blank: {
                ...defaultStyle,
                position: 'relative',
                'text-decoration': 'none',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                outline: 'none',
                transition: 'all .5s',
                color: 'rgb(64, 77, 96)',
                padding: '0 !important',
                margin: 0,
                "justify-content": 'left',
                '&:hover': {
                    opacity: '.7',
                    color:'#03BFCB',
                    'text-shadow': '0 12px 24px -10px rgba(21, 59, 93, 0.46)',
                },
                '&:after': {
                    'font-family': "Icons",
                    content: '',
                    position: 'absolute',
                    'font-size': '25px',
                    'line-height': '30px',
                    width: '30px',
                    right: '-45px',
                    top: '1px',
                    'text-transform': 'none',
                    opacity: 0,
                    transition:' all .5s',
                   
                }
            }
        }
    })
} 

export const Appareance = () => {
    return variant({
        prop: 'appareance',
        variants: {
            outline: {
               background: 'none',
               color:'#03BFCB',
               '&:hover': {
                background: 'none',
                    'text-shadow': '0 12px 24px -10px rgba(21, 59, 93, 0.46)',
                    color: 'rgb(64, 77, 96)',
                },
            }
        }
    })
}

export const Sizes = () => {
    return variant({
        prop: 'size',
        variants: {
            xs: {
              padding: '7px 20px',
              'font-size': '13px',
            
            },
            sm: {
                padding: '15px 30px',
                'font-size': '15px',
              
            },
            lg: {
                padding: '15px 50px',
                'font-size': '20px',
               
            },
        }
    })
}

export default Variants