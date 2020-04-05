import React from 'react';
function SearchBar() {
    function searchHandler(e) {
        e.preventDefault();
    }
    return (
        <div class="container">
            <form>
                <div class="input-group">
                    <label class="sr-only" for="inlineFormInput">
                        Search
                    </label>
                    <input
                        type="text"
                        class="form-control form-control-lg"
                        id="inlineFormInput"
                        placeholder="Type book title or author"
                    />
                    <div className="input-group-append">
                        <button
                            onClick={searchHandler}
                            className="btn btn-lg btn-primary"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default SearchBar;
