import {createUseStyles} from 'react-jss'
import { transitions, colorPickerContentHeight } from '../../../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        matColorWrp: {
            flexDirection: 'column',
            width: '100%'
        },
        materialColor: {
            padding: '1rem 0.5rem',
            width: '100%',
            ...colorPickerContentHeight(),
        },
        materialColorList: {
            width: '100%',
            '& li': {
                marginBottom: '0.5rem',
                '& h3': {
                    width: '100px',
                    fontWeight: theme.textBolder(7),
                    textTransform: 'uppercase',
                    color: theme.text.secondaryColor,
                    fontSize: '0.9rem',
                },
                
            }
        },
        colorBoxWrp: {
            flexGrow: 1,
        },
        colorBox: {
            flexGrow: 1,
            height: '50px',
            cursor: 'pointer',
            ...transitions('0.2s'),
            '&:hover,&.active': {
                transform: 'scale(1.2)',
                borderRadius: '2px',
            }
        }
    }
})
export default useStyles