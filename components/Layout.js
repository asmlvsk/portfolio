import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout =({children}) => {
    return (
        <div>
            <Head>
                <title>Asmlvsk</title>
                <meta name="description" content="Artem Smoilovskyi. I am a developer who wants to make my dreams come true and become one of the best." />
            </Head>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout
