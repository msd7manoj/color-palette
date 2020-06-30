import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles((theme) => {
    return {
        paletteSelect: {
            "& select": {
                border: `1px solid ${theme.formInput.borderColor}`,
                padding: '0rem 1rem',
                borderRadius: theme.formInput.borderRadius,
                width: '100%',
                height: theme.formInput.height,
                lineHeight: theme.formInput.lineHeight,
                fontSize: '1rem',
            }
        }
    }
})
  
export default useStyles
