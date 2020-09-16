import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles((theme) => {
    return {
        colorCodeInput: {
            marginLeft: '1.5rem',
            width: '50%',
        },
        rgbInputVal: {
            '& input': {
                width: '30%'
            }
        }
    }
})
export default useStyles