import React from 'react';
import BookCard from './bookCard';
function searchResultsPage(props) {
    console.log('logging props from searchResultPage', props);
    const searchResult = props['searchValue'];
    console.log(
        `loggin searchResult for rendering bookCards: ${searchResult.length}`
    );
    const title =
        searchResult.length > 0
            ? '<div className="col-sm-2 text-center">Title</div><div className="col-sm-10 text-center">Description</div>'
            : null;
    return (
        <div className="container">
            <div className="row" dangerouslySetInnerHTML={{ __html: title }} />
            {searchResult.map((element) => (
                <BookCard
                    title={element['volumeInfo']['title']}
                    description={element['volumeInfo']['description']}
                />
            ))}
        </div>
    );
}

export default searchResultsPage;
