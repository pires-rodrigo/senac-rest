import { useParams } from "react-router-dom"

export default function Detalhe(){
    const { idContato } = useParams()
    return(
        <div>
            <h1>Detalhe de: {idContato}</h1>
        </div>
    )
}