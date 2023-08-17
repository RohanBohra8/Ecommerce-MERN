import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header></Header>
      <main style={{ minHeight: "74vh" }}>
      <Toaster />
        {children}</main>
      <Footer></Footer>
    </div>
  );
};


Layout.defaultProps = {
  title: 'Ecommerce App - shop now',
  description: 'MERN Stack Project',
  keywords: 'mern,react,mongodb,node',
  author: 'rohanbohra'
}


export default Layout;
