import {createUseStyles} from 'react-jss'
import logo from '../../assets/images/logo2.png'


const useStyles = createUseStyles((theme) => ({
    header: {
        background: theme.primary.bgColor,
        padding: '0.3rem 2rem',
        boxShadow: '0 0 20px -15px #656565',
        position: 'fixed',
        width: '100%',
        zIndex: 1,
        height: 65,
    },
    headerRowWrp: {
        width: '100%'
    },
    ddMenu:{
        margin: '0 0.5rem 0 1.5rem',
    },
    logo: {
        fontWeight: 700,
        fontSize: '2rem',
        '& a': {
            color: theme.text.color
            // backgroundImage: `url(${logo})`,
            // backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover',
            // textIndent: '-9999px',
            // width: '170px',
            // height: '55px',
            // display: 'block'
        }
    },
    dFlex:{
        display: 'flex',
        alignItems: 'center',
    },
    divider: {
        background: '#d8d8d8',
        height: '18px',
        width: '1px',
        margin: '0 0 0 1rem'
    },
    loginWrap: {
        '& a': {
            color: theme.text.secondaryColor,
            fontWeight: theme.textBolder(),
            margin: '0 1rem'
        }
    }
}))
  
export default useStyles