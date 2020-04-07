import React from 'react';
import BookCard from './bookCard';
function searchResultsPage(props) {
    console.log('logging props from searchResultPage', props);
    const searchResult = props['searchValue'] ? props['searchValue'] : props;
    console.log(
        `loggin searchResult for rendering bookCards: ${searchResult.length}`
    );
    const title =
        searchResult.length > 0
            ? '<div class="col-sm-2 text-center">Title</div><div class="col-sm-10 text-center">Description</div>'
            : null;
    return (
        <div className="container">
            {/* <div
                className="row text-center"
                dangerouslySetInnerHTML={{ __html: title }}
            /> */}
            {searchResult.map((element) => (
                <BookCard
                    title={element['volumeInfo']['title']}
                    description={
                        !element['volumeInfo']['description']
                            ? 'No description available'
                            : element['volumeInfo']['description']
                    }
                    authors={element['volumeInfo']['authors']}
                    imgLink={
                        element['volumeInfo']['imageLinks']
                            ? element['volumeInfo']['imageLinks']['thumbnail']
                            : ''
                    }
                    previewLink={element['volumeInfo']['previewLink']}
                />
            ))}
        </div>
    );
}

export default searchResultsPage;
