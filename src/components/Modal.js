export function Modal(props) {
    return (
        <div className="mymodal">
            <button className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target={"#" + props.id}>{props.title}</button>
            <div className="modal fade" id={props.id}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{props.title}</h4>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-primary" data-bs-dismiss="modal">Stäng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}