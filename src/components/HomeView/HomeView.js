import './HomeView.scss';

export const HomeView = ({ titulos, contenido }) => {


    //const {titulos, contenido} = props

    
    return(
        <main>
            <h2>{ titulos }</h2>
            <hr/>
            <p>{ contenido }</p>
        </main>
    )
}