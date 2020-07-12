import {createUseStyles} from 'react-jss'
import { transitions } from '../../../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        tintShaderWrp: {
            width: '100%'
        },
        tintShaderList: {

        },
        tintShaderBox: {
            flexGrow: 1,
            height: '300px',
            cursor: 'pointer',
            ...transitions('0.2s'),
            '&:hover,&.active': {
                transform: 'scale(1.1)',
            }
        }
    }
})
export default useStyles