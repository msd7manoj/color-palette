import {createUseStyles} from 'react-jss'
import { displayFlex, transitions, colorPickerContentHeight } from '../../../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        dFlex: displayFlex('center', 'start'),
        hueShadeWrp: {
            ...colorPickerContentHeight()
        },
        hueShadeList: {
            '& li': {
                marginBottom: '0.5rem',
            }
        },
        hueShadeName: {
            fontWeight: theme.textBolder,
            color: theme.text.secondaryColor,
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
        },
        hueShadeColl: {
            '& div': {
                width: '30px',
                height: '30px',
                margin: '0 0.1rem 0.1rem',
                cursor: 'pointer',
                borderRadius: '3px',
                ...transitions('0.2s'),
                '&:hover,&.active': {
                    transform: 'scale(1.3)',
                }
            }
        }
    }
})
export default useStyles