import { useState } from 'react';

export function ProjectItem(props) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(prevState => !prevState);
  }
  return (
    <div className="project-item backgroundbox">
      <div className="project-item-header" onClick={handleShow}>
        <h4>{props.title}</h4>
        <p><strong>{props.description}</strong></p>
      </div>
      <div className='project-item-children'>{show ? props.children : ""}</div>
    </div>
  );
}
