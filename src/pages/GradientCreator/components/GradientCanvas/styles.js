import {createUseStyles} from 'react-jss'
import { transitions } from '../../../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        gradientCanvas: {
            backgroundImage: `linear-gradient(rgb(164, 63, 141) 0%, rgb(156, 8, 106) 100%)`,
            height: '60vh',
            borderRadius: '10px',
            marginBottom: '2rem',
            ...transitions()
        }
    }
})
export default useStyles