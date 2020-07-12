import {createUseStyles} from 'react-jss'
import { transitions, displayFlex } from '../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        creatPaletteWrp: {
            padding: '0.5rem',
            borderRadius: '5px',
            background: '#f7f7f7',
        },
        chooserContent: {
            padding: '2rem'
        },
        dFlex: {
            ...displayFlex('center', 'center')
        },
        chooserTab: {
            borderBottom: '2px solid #f5f0f0',
            "& li": {
                "& a": {
                    fontWeight: 700,
                    color: '#737373',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    padding: '0 0.7rem 0.6rem 0.7rem',
                    position: 'relative',
                    display: 'block',
                    ...transitions(),
                    '&:hover, &.active': {
                        color: theme.primary.color,
                    },
                    '&:hover:after, &.active:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        height: '2px',
                        width: '100%',
                        background: theme.primary.color,
                    }
                },
                '&:first-child': {
                    margin: 0,
                }
            }
        },
    }
})
export default useStyles