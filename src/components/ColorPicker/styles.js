import {createUseStyles} from 'react-jss'
import { transitions } from '../../styles/styleUtils'
const useStyles = createUseStyles((theme) => {
    return {
        similiarColors: {
            '& h3': {
                fontSize: '1.1rem',
                fontWeight: theme.textBolder(),
                color: theme.text.secondaryColor,
                marginBottom: '1rem',
                textTransform: 'uppercase',
            },
            '& ul': {
                flexWrap: 'wrap',
                '& li': {
                    width: '60px',
                    height: '60px',
                    margin: '0.2rem',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    ...transitions('0.2s'),
                    '&:hover': {
                        transform: 'scale(1.2)',
                    }
                }
            }
        }
    }
})
export default useStyles