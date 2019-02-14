import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'


function Layout({pathname, children}) {

  return (
    <div>
     <Header pathname={pathname}/>
      {children}
     <Footer />
    </div>
  );
}


export default Layout;