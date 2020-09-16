import { createUseStyles } from 'react-jss'
import { displayFlex } from '../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        dFlex: {
            ...displayFlex('center', 'center')
        },
    }
})
export default useStyles
