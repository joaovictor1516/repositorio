interface HabilidadesInterface {
    nome: string
    imagem: string,
    nivel: string
}

export function Habilidades(props: HabilidadesInterface){
    return(
        <>
            <span id="">
                {props.nome}
            </span>
 
           <img src={props.imagem} alt={`Logo da linguagem ${props.nivel}`} id=""/>
        </>
    )    
}