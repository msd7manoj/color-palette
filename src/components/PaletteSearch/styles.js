import {createUseStyles} from 'react-jss'
import { absPosCenter } from '../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        colorSearchInput: {
            position: 'relative',
            '& input': {
                border: `1px solid ${theme.formInput.borderColor}`,
                padding: '0rem 2rem 0rem 1rem',
                borderRadius: theme.formInput.borderRadius,
                width: '100%',
                height: theme.formInput.height,
                lineHeight: theme.formInput.lineHeight,
                fontSize: '1rem',
                transition: 'all 0.30s ease-in-out',
                '&:focus': {
                    borderColor: theme.primary.color
                }
            },
            '& span': {
                fontSize: '1.1rem',
                ...absPosCenter(false, true),
                right: '10px',
                color: '#969696'
            }
        }
    }
})
  
export default useStyles
