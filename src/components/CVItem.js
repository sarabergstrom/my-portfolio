import { useState } from 'react';

export function CVItem(props) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(prevState => !prevState);
  }
  return (
    <div className="cv-item backgroundbox">
      <div className="cv-item-header" onClick={handleShow}>
        <span>
          <p>{props.time}</p>
          <h4>{props.title}</h4>
          <p>{props.company}</p>
        </span>
      </div>
      <a className='link-dark' onClick={handleShow}>{show ? "Visa mindre" : "Visa mer"}</a>
      <div className='cv-item-children'>{show ? props.children : ""}</div>
    </div>
  );
}
