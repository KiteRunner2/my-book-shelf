import React from 'react';
function bookCard(props) {
    // console.log(`logging props from bookCard ${props}`);
    return (
        <>
            <div className="row text-center">
                <div className="col-sm-2 text-center py-3 text-monospace">
                    <span className="font-weight-bold">Title:</span>{' '}
                    {props.title}
                    <hr></hr>
                    <img src={props.imgLink ? props.imgLink : ''} />
                </div>
                <div className="col-sm-8 text-center py-3 px-lg-5 text-monospace">
                    <span className="font-weight-bold">Description:</span>{' '}
                    {props.description}
                </div>
                <div className="col-sm-2  text-center py-3">
                    <a
                        href={props.previewLink}
                        className="btn btn-small btn-secondary"
                        target="blank"
                    >
                        Visit
                    </a>
                    {'    '}
                    <a
                        href="#"
                        className="btn btn-small btn-secondary"
                        target="blank"
                    >
                        Save
                    </a>
                </div>
            </div>
        </>
    );
}
export default bookCard;
