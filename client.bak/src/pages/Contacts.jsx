import React from 'react';
import AppNav from '../components/core/AppNav/AppNav';
import ContactPg from '../components/feature/Contact/Contact'
import Footer from '../components/core/Footer/footer'
class Contacts extends React.Component {
    render () {
        return (
        <>
      <ContactPg/>
      <Footer/>
        </>
    )
    }
}
export default Contacts;