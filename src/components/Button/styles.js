import {createUseStyles} from 'react-jss'
import { buttonConfig } from '../../styles/styleUtils';

const useStyles = createUseStyles((theme) => {
    return {
        'appButton': ({buttonSize}) => {
            let buttonSizeStyle = {};
            if( buttonSize === 'bg' ) {
                buttonSizeStyle = buttonConfig('1rem', '0.7rem 1.5rem')
            } else if( buttonSize === 'md' ) {
                buttonSizeStyle = buttonConfig('0.9rem', '0.6rem 1.5rem')
            } else if( buttonSize === 'sm' ) {
                buttonSizeStyle = buttonConfig('1rem', '0.4rem 1rem')
            }
            return {
                borderRadius: '3px',
                background: theme.primary.color,
                color: '#fff',
                border: 0,
                cursor: 'pointer',
                ...buttonSizeStyle
            }
        }
    }
})
export default useStyles