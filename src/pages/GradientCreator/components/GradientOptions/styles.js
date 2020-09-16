import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles((theme) => {
    return {
        gradientOptions: {
            alignItems: 'flex-start',
            "& h3": {
                color: '#3f3f3f',
                fontSize: '1.2rem',
                fontWeight: 600,
            },
        },
        gradientColorPicker: {
            padding: '0.5rem'
        },
        gradientDegRotator: {
            display: 'flex',
            padding: '0.5rem',
            flexGrow: 1,
            flexDirection: 'column',
            alignItems: 'center'
        },
        gradientInputSec: {
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            width: '100%'
        },
        gradientInputOption: {
            flexGrow: 1,
            padding: '0 1rem',
            "& h3": {
                padding: '0 .8rem'
            },
        },
        posInputOption: {
            padding: '0 .8rem'
        }
    }
})
export default useStyles