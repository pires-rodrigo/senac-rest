import Filho from "./filho";

export default function Pai(){
   // let obj = {nome:'maria',idade:50}
   function respostaFilho(texto){
     alert(texto)
   }
    return(
        <div>
            <h2>Componente Pai</h2>
            <Filho 
               msg="olá filho, suspendi a mesada"
               dados={{nome:'maria',idade:50}}
               respostaProPai={respostaFilho}
            />
        </div>
    )
}