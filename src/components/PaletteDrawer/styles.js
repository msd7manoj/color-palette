import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles((theme) => {
    return {
        paletteDrawerWrp: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
        },
        paletteDrawerHeader: {
            padding: '1rem',
            borderBottom: '1px solid #ccc',
            '& h3': {
                fontSize: '1.5rem',
                fontWeight: '600',
                textTransform: 'uppercase',
            }
        },
        paletteNav: {
            padding: '0.5rem 1rem',
            background: '#e4e4e4',
            marginTop: 'auto',
            '& a': {
                margin: '0 0.2rem'
            }
        }
    }
})
  
export default useStyles
