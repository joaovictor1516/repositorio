interface ProjetosInterface {
    habilidades: string[];
    descricao: string;
    titulo: string;
    imagem_link: string;
    link: string;
}

export function Projetos(props: ProjetosInterface){
    <>
        <h3 id="">
            {props.titulo}
        </h3>

        <img src={props.imagem_link} alt={props.titulo} id=""/>

        <p id="">
            {props.descricao}
        </p>

        {props.habilidades.map((habilidade) => {
            return(
                <div className="">
                    {habilidade}
                </div>
            )
        })}
    </>
}