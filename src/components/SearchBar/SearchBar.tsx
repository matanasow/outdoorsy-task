import React, { FC, KeyboardEvent, ChangeEvent, useState } from 'react';

import Image from 'next/image';

import TextField from '../TextField/TextField';

import { ISearchBar } from './ISearchBar.interface';

import styles from './SearchBar.module.scss';

const SearchBar: FC<ISearchBar> = ({
    search,
    handleSearchChange,
    clearSearch
}) => (
        <div className={`${styles.search} ${search && styles.active}`}>
            <TextField
                classes={{
                    wrapper: styles.search__field,
                    input: styles.search__input
                }}
                placeholder={'search'}
                value={search}
                onChangeHandler={handleSearchChange}
            />
            {search.length ? (
                <button onClick={clearSearch} className={styles.search__clear} aria-label='clearSearchLabel'>
                    <Image src="/close-icon.svg" width="24" height="24" aria-hidden alt="clear search" />
                </button>
            ) : null}
        </div>
    );

export default SearchBar;
