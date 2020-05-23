import React, { useEffect } from 'react'

import Router from 'next/router'
import * as gtag from '../lib/gtag'

import '../assets/index.less'


const App = ({ Component, pageProps, str }) => {
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    return <Component {...pageProps} />
}

export default App;