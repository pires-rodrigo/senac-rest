export default function Card(props) {
    function excluir(){
    fetch(`http://localhost:8080/contatos/${props.contato.id}`,
      {
        method:'DELETE'        
      })
      .then(x => alert('Contato excluido com sucesso.'))
    }
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
                <div className="mt-3 d-flex justify-content-between">
                    <button className="btn btn-outline-primary">Editar</button>
                    <button 
                      onClick={excluir}
                    className="btn btn-outline-danger" >Excluir</button>
                </div>
            </div>
        </div>
    )
}