import {createUseStyles} from 'react-jss'
import { absCenter } from '../../../../styles/styleUtils'


const useStyles = createUseStyles((theme) => {
    return {
        paletteTabWrp: {
            padding: '0.8rem'
        },
        paletteTabContWrp: {
            padding:'0.8rem'
        },
        active:{},
        drawerPaletteTab: {
            '& li': {
                flexGrow: 1,
                height: '50px',
                cursor: 'pointer',
                position: 'relative',
                '&:first-child': {
                    borderRadius: '4px 0px 0px 4px',
                },
                '&:last-child': {
                    borderRadius: '0px 4px 4px 0px',
                },
                '& span': {
                    background: 'rgba(0,0,0,0.3)',
                    width: '25px',
                    height: '25px',
                    color: '#fff',
                    ...absCenter(),
                    textAlign: 'center',
                    lineHeight: '25px',
                    borderRadius: '50%',
                    fontSize: '0.8rem',
                    opacity: 0,
                    transition: 'all linear 0.3s',
                },
                '&:hover span': {
                    opacity: 1,
                },
                '&$active': {
                    '& span': {
                        opacity: 1,
                    }
                }
            }
        },
        colorCode: {
            '& h4': {
                fontWeight: 600,
                marginBottom: '0.4rem',
                color: '#676767',
                fontSize: '0.9rem',
                textTransform: 'uppercase'
            },
            '& h3': {
                color: '#000',
                fontSize: '0.9rem',
                '& a': {
                    marginLeft: '0.4rem',
                    fontSize: '0.8rem',
                    color: '#777',
                }
            }
        },
        code_rt: {
            textAlign: 'right'
        },
        colorCodeLists: {
            '& li': {
                borderBottom: '1px solid #d8d8d8',
                padding: '0.9rem 0.5rem',
                '&:last-child': {
                    borderBottom: 0
                }
            }
        }
    }
})
  
export default useStyles
