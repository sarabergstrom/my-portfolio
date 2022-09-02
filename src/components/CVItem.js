import { useState } from 'react';

export function CVItem(props) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(prevState => !prevState);
  }
  return (
    <div className="cv-item backgroundbox flex-grow-1">
      <div className="cv-item-header" onClick={handleShow}>
          <p>{props.time}</p>
          <h4>{props.title}</h4>
          <p>{props.company}</p>
      </div>
      <button className='btn btn-link link-dark no-margin' onClick={handleShow}>{show ? "Visa mindre" : "Visa mer"}</button>
      <div className='cv-item-children'>{show ? props.children : ""}</div>
    </div>
  );
}
