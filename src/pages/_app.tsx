
import { AppProps } from "next/app";
import React from "react";

import '@/styles/global.scss';


function MyApp({ Component, pageProps }: AppProps) {

    return (
        <div id="root">
            <Component {...pageProps} />
        </div>
    )

}

export default MyApp