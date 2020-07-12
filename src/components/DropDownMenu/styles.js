import {createUseStyles} from 'react-jss'
import logo from '../../assets/images/logo2.png'
import { displayFlex, transitions } from '../../styles/styleUtils'

const getDDPosition = (width, height, position) => {
    switch (position) {
        case 'bottom-right':
            return { right: 0, top: height }
        case 'bottom-left':
            return { left: 0, top: height }
        case 'left':
            return { right: width, bottom: 0 }
        case 'right':
            return { left: width, bottom: 0 }
        default:
            return { right: 0, top: height }
    }
}
const getSize = (size) => {
    switch (size) {
        case 'lg':
            return { padding: '1rem', fontSize: '1rem' }
        case 'md':
            return { padding: '0.5rem', fontSize: '0.9rem' }
        case 'sm':
            return { padding: '0.3rem', fontSize: '0.7rem' }
        default:
            return { padding: '1rem', fontSize: '1rem' }
    }
}
const useStyles = createUseStyles((theme) => ({
    dropDownWrp: {
        position: 'relative'
    },
    dropDownMenu: ({ size, width, iconWidth, iconHeight, position }) => ({
        position: 'absolute',
        zIndex: 999,
        width: width,
        right: 0,
        textAlign: 'left',
        top: iconHeight,
        ...getDDPosition(iconWidth, iconHeight, position),
        background: '#f5f5f5',
        borderRadius: '5px',
        overflow: 'hidden',
        boxShadow: '0px 7px 20px 0px rgba(55, 55, 55, 0.37)',
        '& li': {
            '& a': {
                padding: '1rem',
                ...getSize(size),
                color: theme.text.secondaryColor,
                display: 'block',
                fontWeight: theme.textBolder(),
                borderBottom: '1px solid #ddd',
                ...transitions('0.3s'),
                '&:hover': {
                    background: '#dedede'
                }
            },
            '&:last-child a': {
                borderBottom: '0'
            }
        }
    }),
    dropDownIcon: ({ iconSize, iconWidth, iconHeight}) => ({
        ...displayFlex('center', 'center'),
        fontSize: iconSize,
        color: theme.text.secondaryColor,
        width: iconWidth,
        height: iconHeight,
        background: '#f9f9f9',
        border: 0,
        cursor: 'pointer',
        borderRadius: '50%',
        transition: 'all linear 0.3s',
        '&:hover': {
            background: '#e4e4e4'
        }
    }),
}))
  
export default useStyles