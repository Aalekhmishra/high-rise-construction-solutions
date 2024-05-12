import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

const PageLayout = () => (WrappedComponent) => {
    return (props) => {
        return (
            <React.Fragment>
                <Header />
                <div> <WrappedComponent {...props} /></div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default PageLayout;