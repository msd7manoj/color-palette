
import {createUseStyles} from 'react-jss'
    
const useStyles = createUseStyles((theme) => {
    return {
        toasterWrp:{
            color: '#91ff94'
        },
        // color: #4c0700;
        // color: #ee8378;
        // border: 0;
        // cursor: pointer;
        // padding: 0.3rem 0.7rem;
        // background: #c11100;
        toasterButton: () => ({
            border: 0,
            background: '#39e03e',
            padding: '0.3rem 0.7rem',
            borderRadius: '2px',
            fontWeight: 600,
            color: '#058809',
            cursor: 'pointer'
        }),
    }
})
    
export default useStyles
    