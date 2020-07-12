import {createUseStyles} from 'react-jss'
import { transitions } from '../../../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        creatPaletteList: {
            flexDirection: 'column',
            height: 'calc(100vh - (65px + 6rem ))',
            '& li': {
                width: '100%',
                flexGrow: 1,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                '&:first-child': {
                    borderRadius: '5px 5px 0px 0px',
                },
                '&:last-child': {
                    borderRadius: '0px 0px 5px 5px',
                },
                '&:hover $colorMarker, &.selected $colorMarker': {
                    left: '-20px',
                }
                
            }
        },
        colorMarker: {
            position: 'absolute',
            width: '40px',
            height: '40px',
            background: 'rgba(0,0,0,0.4)',
            color: '#f8f8f8',
            borderRadius: '50%',
            left: '-40px',
            top: 0,
            bottom: 0,
            margin: 'auto',
            ...transitions('0.1s'),
            padding: '0.2rem',
            '& i': {
                fontSize: '0.9rem',
            }
        },
    }
})
export default useStyles