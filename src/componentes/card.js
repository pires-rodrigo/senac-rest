export default function Card(props) {
    return (
        <div className="card mt-3 col-sm-3">
            <img src="https://images.mediago.io/ML/d56383e33c450ea498419ced130c0bdf__scv1__300x157.png" 
            className="card-img-top" alt={props.contato.nome} />
            <div className="card-body">
                <div>
                    <span className="fw-bold me-1">Nome:</span>
                    <span className="text-danger">{props.contato.nome}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Email:</span>
                    <span className="text-danger">{props.contato.email}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Fone:</span>
                    <span className="text-danger">{props.contato.fone}</span>
                </div>
            </div>
        </div>
    )
}