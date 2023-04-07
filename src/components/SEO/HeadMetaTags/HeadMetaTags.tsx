import React, { FC } from 'react';
import Head from 'next/head';

interface IHead {
    metaTitle: string;
    metaDescription: string;
    domain: string;
}

const HeadMetaTags: FC<IHead> = ({
    metaTitle,
    metaDescription,
    domain
}) => (
    <Head>
        <title>
            {metaTitle}
        </title>
        <meta name="title" content={metaTitle} />
        <meta name="robots" content="index,follow" />
        <meta name="description" content={metaDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={domain} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
    </Head>
);

export default HeadMetaTags;
