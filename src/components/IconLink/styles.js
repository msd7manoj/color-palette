import {createUseStyles} from 'react-jss'
import { displayFlex } from '../../styles/styleUtils'


const useStyles = createUseStyles((theme) => {
    return {
        iconLink: {
            width: theme.icons.width,
            height: theme.icons.height,
            fontSize: '1rem',
            color: theme.icons.color,
            ...displayFlex('center', 'center'),
            borderRadius: '50px',
            transition: 'all linear 0.3s',
            border: 0,
            cursor: 'pointer',
            background: 'transparent',
            '&:hover': {
                background: '#efefef'
            },
            '&.active': {
                color: theme.primary.color,
            }
        }
    }
})
  
export default useStyles
