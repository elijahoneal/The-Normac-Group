import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    imgStyle: {
        width: '100%',
        height: '20rem',
        objectFit: 'cover',
        opacity: '0.4'
    },
    overlay: {
        width: '100%',
        height: '20rem',
        position: 'relative',
        backgroundColor: '#000'
    },
    featureText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        color: '#fff'
    },
    featureBody: {
        width: '80%',
        fontSize: '1rem'
    },
    itemTitle: {
        fontWeight:'bold',
        fontSize: '2rem',
        color: '#2196f3',
        margin: '1rem'
    },
    items: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2rem auto',
         '@media (min-width: 768px)': {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start'
        },
    },
    item: {
        margin: '1rem auto',
        '@media (min-width: 768px)': {
            width: '33%',
            height: 'auto',
            
        }
    },
    testimonialBody: {
        marginTop: '0.5rem',
        '@media (min-width: 768px)': {
            fontSize: '0.8rem',
        },
       
    },
    testimonialQoute: {
        marginTop: '0.5rem',
        color: '#2196f3',
        fontStyle: 'italic'
    },
    icons: {
        width: '15%',
        height: 'auto'
    },
    buttons: {
        backgroundColor:  '#2196f3',
        color: '#ffffff',
        width: '50%',
        fontSize: '1.1rem',
        padding: '0.5rem',
        margin: '1rem auto',
        '&:hover': {
            backgroundColor: '#777777'
          }
    },
    aboutUs: {
        width: '75%',
        margin: ' 2rem auto'
    },
    aboutTitle: {
        fontWeight:'bold',
        fontSize: '2rem',
        color: '#fff',
        margin: '1rem'
    }
})

export default useStyles