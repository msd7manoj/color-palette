import {createUseStyles} from 'react-jss'
import { absPosCenter } from '../../../styles/styleUtils'


const useStyles = createUseStyles((theme) => {
    return {
        paletteList: {
            display: 'flex',
            flexDirection: 'column',
            '& li': {
                height: '60px',
                cursor: 'pointer',
                transition: 'all linear 0.3s',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:first-child': {
                    borderRadius: '6px 6px 0 0px',
                },
                '&:last-child': {
                    borderRadius: '0px 0px 6px 6px',
                },
                '&:hover $colorToolTip': {
                    left: '15px',
                    opacity: '1',
                } 
            }
        },
        colorCopy: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '1.1rem',
            position: 'absolute',
            color: '#fff',
        },
        colorToolTip: {
            background: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: '3px 12px',
            borderRadius: '2px',
            ...absPosCenter(false, true),
            left: '-40px',
            opacity: '0',
            transition: 'all linear 0.15s',
        },
    }
})
  
export default useStyles
