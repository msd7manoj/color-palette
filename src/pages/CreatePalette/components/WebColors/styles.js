import {createUseStyles} from 'react-jss'
import { colorPickerContentHeight, transitions, displayFlex } from '../../../../styles/styleUtils'

const useStyles = createUseStyles((theme) => {
    return {
        dFlex: displayFlex('center', 'center'),
        webColorsWrp: colorPickerContentHeight(),
        webColorsList: {
            flexWrap: 'wrap',
            padding: '0.5rem',
            '& li': {
                margin: '0 0.2rem 0.2rem',
                '& div': {
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...transitions('0.2s'),
                    '&:hover,&.active': {
                        transform: 'scale(1.3)',
                        borderColor: '#dad0d0',
                    },
                    '&.active': {
                        '& span': {
                            width: '5px',
                            height: '5px',
                            background: 'rgba(0, 0, 0, 0.7)',
                            borderRadius: '50%',
                        }
                    }
                
                }
            }
        },
        colorInfoDesc: {
            padding: '0.8rem 0.5rem',
            minHeight: '50px',
            background: theme.secondary.bgColor,
            borderRadius: '3px',
            marginBottom: '1rem',
            width: '100%',
            "& li": {
                "& h3": {    
                    color: theme.text.secondaryColor,
                    fontWeight: theme.textBolder(),
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                },
                "& h4": {
                    color: theme.text.color,
                    fontSize: '0.9rem',
                    fontWeight: theme.textBolder(),
                    textTransform: 'capitalize',
                }
            }
        }
    }
})
export default useStyles