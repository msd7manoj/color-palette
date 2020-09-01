import {createUseStyles} from 'react-jss'
import { displayFlex } from '../../styles/styleUtils'


const useStyles = createUseStyles((theme) => {
    return {
        iconLink: ({buttonStyle, iconStyle}) => ({
            border: 0,
            cursor: 'pointer',
            background: 'transparent',
            ...displayFlex('center', 'center'),
            padding: 0,
            ...buttonStyle,
            '& i': {
                width: theme.icons.width,
                height: theme.icons.height,
                fontSize: '1rem',
                color: theme.text.secondaryColor,
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
                },
                ...iconStyle
            }
            
        })
    }
})
  
export default useStyles
