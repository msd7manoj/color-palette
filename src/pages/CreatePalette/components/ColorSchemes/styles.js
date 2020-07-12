import {createUseStyles} from 'react-jss'
import { colorPickerContentHeight, transitions, displayFlex } from '../../../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        dFlex: displayFlex('center', 'start'),
        schemeListsWrp: colorPickerContentHeight(),
        schemeLists: {
            flexDirection: 'column',
            width: '100%',
            '& li': {
                background: theme.secondary.bgColor,
                marginBottom: '0.5rem',
                padding: '0.5rem 0.5rem 0',
                borderRadius: '4px',
            }
        },
        schemeColl: {
            alignItems: 'flex-start',
            flexDirection: 'column',
            margin: '0 0.5rem 1rem',
            '& h3': {
                fontWeight: theme.textBolder(),
                textTransform: 'capitalize',
                color: theme.text.secondaryColor,
                marginBottom: '0.5rem',
            }
        },
        schemeColorBox: {
            '& div': {
                width: '30px',
                height: '30px',
                margin: '0 0.1rem',
                borderRadius: '3px',
                cursor: 'pointer',
                ...transitions(),
                '&:hover, &.active': {
                    transform: 'scale(1.3)',
                }
            }
        }
    }
})
export default useStyles