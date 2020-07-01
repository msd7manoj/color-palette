import {createUseStyles} from 'react-jss'
import { displayFlex } from './styleUtils'

const globalStyles = createUseStyles((theme) => {
    console.log('theme', theme)
    return {
        'dFlex': displayFlex(),
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
            padding: '3rem 2rem',
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
        appMenuIcon: {
            ...displayFlex('center', 'center'),
            margin: '0 0.5rem 0 1.5rem',
            fontSize: '1.4rem',
            color: '#9c9c9c',
            width: '40px',
            height: '40px',
            background: '#f9f9f9',
            border: 0,
            cursor: 'pointer',
            borderRadius: '50%',
            transition: 'all linear 0.3s',
            '&:hover': {
                background: '#e4e4e4'
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