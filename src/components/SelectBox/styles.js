import {createUseStyles} from 'react-jss'
import { transitions } from '../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        selectorWrap: ({width}) => ({
            position: 'relative',
            width
        }),
        selectorLbl: {
            color: theme.text.secondaryColor,
            fontWeight: 600,
            position: 'relative',
            cursor: 'pointer',
            padding: '0 0.8rem',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            '& i': {
                position: 'absolute',
                right: 0,
                top: '10px',
                fontSize: '0.8rem',
            }
        },
        
        selectorDd: {
            position: 'absolute',
            bottom: '30px',
            left: 0,
            background: '#fff',
            border: '2px solid #eaeaea',
            borderRadius: '3px',
            '& li': {
                '& button': {
                    display: 'block',
                    padding: '0.8rem',
                    color: theme.text.secondaryColor,
                    fontSize: '1rem',
                    fontWeight: 600,
                    position: 'relative',
                    border: 0,
                    background: '#fff',
                    width:'100%',
                    textAlign: 'left',
                    cursor: 'pointer',
                    ...transitions(),
                    '&:before': {
                        content: "",
                        position: 'absolute',
                        width: '2px',
                        height: '100%',
                        left: '-2px',
                        top: '0px',
                        ...transitions()
                    },
                    '&:hover': {
                        color: '#a11ad4',
                        '&:before': {
                            background: '#a11ad4',
                        }
                    }
                }
                
            },
            '& li.selectedValue': {
                '& button': {
                    color: theme.primary.color,
                    '&:before': {
                        background: '#a11ad4',
                    }
                }
            },
        },
        
    }
})
export default useStyles