const styles = {
    container: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    logo: {
        width: '40px',
        height: '40px',
        marginRight: '10px',
    },
    logoText: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
    },
    nodeContainer: {
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
    },
    '@media (max-width: 768px)': {
        container: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        logoText: {
            fontSize: '18px',
        },
        logo: {
            width: '35px',
            height: '35px',
        },
    },
    '@media (max-width: 480px)': {
        nodeContainer: {
            gap: '5px',
        },
        logoText: {
            fontSize: '16px',
        },
        logo: {
            width: '30px',
            height: '30px',
        },
    },
};

export default styles;
