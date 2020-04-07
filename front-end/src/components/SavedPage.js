import React, { useState, useEffect } from 'react';
import SavedBookCard from './SavedBookCard';

function SavedPage() {
    const [books, setBooks] = useState([]);
    async function getBooks() {
        const url = '/api/getbooks';
        const result = await fetch(url).then((response) => response.json());
        console.log(result);
        setBooks([...result]);
    }
    useEffect(function () {
        console.log('useEffect for getbooks called');
        getBooks();
    }, []);
    return (
        <div className="container">
            {books.map((book) => (
                <SavedBookCard title={book.title} />
            ))}
        </div>
    );
}

export default SavedPage;
