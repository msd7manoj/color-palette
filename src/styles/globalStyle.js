import {createUseStyles} from 'react-jss'
import { displayFlex } from './styleUtils'

const globalStyles = createUseStyles((theme) => {
    console.log('theme', theme)
    return {
        'dFlex': displayFlex(),
        'dFlexStart': displayFlex('center', 'flex-start'),
        'dFlexCenter': displayFlex('center', 'center'),
        'dFlexEnd': displayFlex('center', 'flex-end'),
        '@global': {
            input: {
                '&:focus': {
                    boxShadow: `0 0 5px ${theme.primary.color}`,
                    border: `1px solid ${theme.primary.color}`
                }
            }
        },
        toastifyContainer: {
            zIndex: 99999
        },
        mainLayout:{
            padding: '2.5rem 2rem',
            marginTop: '65px',
            "& h1":{
                fontSize: '2.5rem',
                fontWeight: 700,
                textTransform: 'capitalize',
                position: 'relative',
                padding: '1rem',
                '&:after': {
                    content: '""',
                    width: '65px',
                    height: '2px',
                    background: theme.primary.color,
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    margin: 'auto',
                },
                
            }
        },
        'mb-xs': {
            marginBottom: '0.5rem'
        },
        'mb-1': {
            marginBottom: '1rem'
        },
        'mb-2': {
            marginBottom: '2rem'
        },
        'posRelatvie': {
            position: "relative"
        }
    }
})
export default globalStyles