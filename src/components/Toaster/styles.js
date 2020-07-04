
import {createUseStyles} from 'react-jss'
    
const useStyles = createUseStyles((theme) => {
    return {
        ttoasterWrp:({ type }) => ({
            color: type === 'success' ? '#91ff94' : '#4c0700',
        }),
        toasterButton: ({ type }) => ({
            border: 0,
            background: type === 'success' ? '#39e03e' : '#c11100',
            padding: '0.3rem 0.7rem',
            borderRadius: '2px',
            fontWeight: 600,
            color: type === 'success' ? '#058809' : '#ee8378',
            cursor: 'pointer'
        }),
    }
})
    
export default useStyles
    