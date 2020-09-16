import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles((theme) => {
    return {
        gradientCreatorSlider: {
            width: '100%',
            height: '12px',
            borderRadius: '10px',
            transition: 'all linear 0.3s',
            position: 'relative',
            marginBottom: '50px',
        },
        gradientCreatorHandle: {
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            position: 'absolute',
            top: '-8px',
            border: '8px solid #efeee9',
        },
        activeHandle: {
            boxShadow: '0px 0px 3px 0px #747474',
            zIndex: 1
        }
        
    }
})
export default useStyles