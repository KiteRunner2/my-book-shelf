import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchResultsPage from './searchResultsPage';

function SearchPage() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        console.log('calling useEffect hoook');
        if (searchValue !== '') {
            getBooks();
        }
    }, [searchValue]);
    function setSearch(phrase) {
        console.log('call from SearchPage component', phrase);
        setSearchValue(phrase);
        // console.log(searchValue);
        // setTimeout(getResults, 500);
    }

    async function getBooks() {
        console.log('getBooks called');
        console.log(`searchValue is ${searchValue}`);
        let url = `https://www.googleapis.com/books/v1/volumes?q="${searchValue}"&key=AIzaSyBAzph4dcGUEI9hkcIh7XuZJzpBuNhEJ9s&projection=lite`;
        console.log(`search url is: ${url}`);
        const books = await fetch(url).then((result) => result.json());
        setSearchResult([...books.items]);
    }
    return (
        <div className="container">
            <SearchBar setPhrase={setSearch} />
            <SearchResultsPage searchValue={searchResult} />
        </div>
    );
}

export default SearchPage;
