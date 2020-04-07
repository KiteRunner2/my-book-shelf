import React, { useState } from 'react';
function SearchBar(props) {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(e) {
        setInputValue(e.target.value);
        // console.log(inputValue);
    }
    function handleButtonClick(e) {
        e.preventDefault();
        console.log(
            `handleButtonClick called and inputValue is: ${inputValue}`
        );
        props.setPhrase(inputValue);
    }
    return (
        <div class="container">
            <form>
                <div class="input-group">
                    <label class="sr-only" for="inlineFormInput">
                        Search
                    </label>
                    <input
                        onChange={handleInputChange}
                        type="text"
                        class="form-control form-control-lg"
                        id="inlineFormInput"
                        placeholder="Type book title or author"
                        value={inputValue}
                    />
                    <div className="input-group-append">
                        <button
                            onClick={handleButtonClick}
                            className="btn btn-lg btn-outline-primary"
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
