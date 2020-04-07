import React from 'react';
function bookCard(props) {
    // console.log(`logging props from bookCard ${props}`);
    const style = {
        topBuffer: {
            marginTop: '5px',
        },
    };

    async function sendBook(e) {
        e.preventDefault();
        console.log(props);
        const url = '/api/storebook';
        const data = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(props),
        };
        const result = await fetch(url, data).then((response) =>
            response.json()
        );
        if (result.answer == 'ok') {
            alert('Saved');
        } else {
            alert('error saving book');
        }
    }
    return (
        <>
            <div
                className="row text-center border border-secondary rounded"
                style={style.topBuffer}
            >
                <div className="col-sm-2 text-center py-3 text-monospace">
                    <span className="font-weight-bold">Title:</span>{' '}
                    {props.title}
                    <hr></hr>
                    <img src={props.imgLink ? props.imgLink : ''} />
                </div>
                <div className="col-sm-8 text-center py-3 px-lg-5 text-monospace">
                    {' '}
                    <span className="font-weight-bold">Description:</span>{' '}
                    <span className="align-middle"> {props.description}</span>
                </div>
                <div className="col-sm-2  text-center align-middle py-3">
                    <a
                        href={props.previewLink}
                        className="btn btn-small btn-secondary align-middle"
                        target="blank"
                    >
                        Visit
                    </a>
                    {'    '}
                    <a
                        href="#"
                        className="btn btn-small btn-secondary align-middle"
                        target="blank"
                        onClick={sendBook}
                    >
                        Save
                    </a>
                </div>
            </div>
        </>
    );
}
export default bookCard;
