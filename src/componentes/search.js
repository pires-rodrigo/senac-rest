export default function Search(){
    function ola(){
       alert('')
    }
    return(
        <>
           <div className="m-3">
             <label className="form-label">Informe um critério de pesquisa</label>
             <div className="d-flex justify-content-between">
                <input className="form-control" type="text" />
                <button className="btn btn-success" onClick={ola}>Pesquisar</button>
             </div>             
          </div>
        </>
    )
}