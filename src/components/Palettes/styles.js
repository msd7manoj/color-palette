import {createUseStyles} from 'react-jss'
import { displayFlex } from '../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        paletteWrp: {
            padding: '1rem',
            transition: 'all linear 0.3s',
            background: '#f9f9f9',
            boxShadow: '0px 0px 3px 0px #d2d2d2'
        },
        paletteAction: {
            '& a': {
                color: '#5f5f5f',
                fontSize: '1.5rem',
                width: theme.icons.width,
                height: theme.icons.height,
                borderRadius: '50%',
                ...displayFlex('center', 'center'),
                transition: 'all linear 0.3s',
                '&:hover': {
                    background: '#efefef',
                }
            },
        },
        likePalette: {
            fontWeight: 600,
            color: '#5f5f5f',
            '& a': {
                marginRight: '0.2rem'
            }
        },
        createdBy: {
            '& i': {
                marginRight: '4px',
            },
            color: '#000',
            fontStyle: 'italic',
            fontSize: '0.8rem',
            fontWeight: 600
        },
        
    }
})
  
export default useStyles
