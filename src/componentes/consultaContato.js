import Search from "./search";


export default function ConsultaContato(){
    const contatos = [
        {id:1,nome:'maria',email:'maria@gmail'},
        {id:2,nome:'ana',email:'ana@gmail'}
    ]
    return(
        <>
          <h2 className="text-center">Consultar Contato</h2>
          <hr />
          
          <Search />

          <table className="table">
              <thead>
                 <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                 </tr>
              </thead>
              <tbody>
                  {
                    contatos.map(ct => 
                        <tr>
                            <td> {ct.id}</td>
                            <td> {ct.nome}</td>
                            <td> {ct.email}</td>
                        </tr> 
                    )
                  }
              </tbody>
          </table>
        </>
    )
}