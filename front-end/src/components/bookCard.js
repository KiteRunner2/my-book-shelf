import React from 'react';
function bookCard(props) {
    // console.log(`logging props from bookCard ${props}`);
    return (
        <>
            <div className="row">
                <div className="col-sm-2">{props.title}</div>
                <div className="col-sm-10">{props.description}</div>
            </div>
        </>
    );
}
export default bookCard;
