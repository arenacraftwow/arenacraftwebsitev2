import React from 'react';
import { createUseStyles } from 'react-jss';
import { Navigation } from '../components/Navigation/Navigation';
import { ToastContainer, Flip } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

const useStyle = createUseStyles({
    containerWrapper: {
        width:'100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center'
    },
    container: {
        maxWidth: 960,
        width: '100%',
        padding: '1.5rem',
        borderRadius: 8,
        minHeight: 'calc(100vh - 120px)',
    }
});

function MyApp({ Component, pageProps }) {
    const cls = useStyle();
    return (
        <div>
            <Navigation />
            <div className={cls.containerWrapper}>
                <div className={cls.container}>
                    <Component {...pageProps} />
                </div>
            </div>
            <ToastContainer transition={Flip} position='bottom-right' />
        </div>
    );
}

export default MyApp
