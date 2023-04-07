import React, { ChangeEvent, useEffect, useState } from 'react';

import { NextPage } from 'next';
import HeadMetaTags from '@/components/SEO/HeadMetaTags/HeadMetaTags';
import SearchBar from '@/components/SearchBar/SearchBar';

import { getRentals } from '@/pages/api/rentals';
import Image from 'next/image';

import styles from './index.module.scss';

const Home: NextPage = () => {
    const [search, setSearch] = useState('');
    const [rentalsData, setRentalsData] = useState([]);
    const [rentalsIncluded, setRentalsIncluded] = useState([]);

    const getRentalsData = async (trimmedSearchQuery: string) => {
        const response = await getRentals('Atlanta', trimmedSearchQuery)
        const rentalsResult= await response.json()
        setRentalsData(rentalsResult.data)
        setRentalsIncluded(rentalsResult.included)
    }

    const handleSearchChange = (event: ChangeEvent, searchString: string) => {
        setSearch(searchString);

        const trimmedSearchQuery = encodeURIComponent(searchString.trim());

        if (trimmedSearchQuery.length > 1) {
            getRentalsData(trimmedSearchQuery)
        }
    
    };

    const primaryImageIds = rentalsData.map(rent => rent['relationships']['primary_image']['data']['id'])
    const rentalImageUrls = rentalsIncluded.filter(inc => inc['type'] === 'images' && primaryImageIds.includes(inc['id'])).map(ren => ren['attributes']['url'])
    debugger;
    const clearSearch = () => {
        setSearch('');
    };
    
    return (
        <div>
            <HeadMetaTags
                metaTitle="meta title"
                metaDescription="meta description"
                domain="domain"
            />
                <SearchBar handleSearchChange={handleSearchChange} clearSearch={clearSearch} search={search} />
            <div className={styles.rentals}>
                {rentalImageUrls.map((img, index) => (
                    <div className={styles.rentals__box}>
                        <Image src={img}  alt="rental image" width="300"
                        height="200"/>
                        <div className={styles.rentals__name}>{rentalsData[index]['attributes']['name']}</div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default Home;