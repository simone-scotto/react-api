import { useState } from "react"






export default function Main () {

    const url = "https://lanciweb.github.io/demo/api/actresses/"
    const [actorsData, setActorsData] = useState([])

    function  handleClick () {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setActorsData(data)
            
        })

    
    }
    return (
        <>
        <section className="btn_section d-flex justify-content-center p-3">
            <button onClick={handleClick} className="btn btn-primary ">Load Cards</button>
        </section>
        <section className="actors">
            <div className="row row-cols-1 row-cols-md-3 g-2">
                {actorsData.map(actor => {
                    return (
                        <div key={actor.id} className="col">
                            <div className="card">
                                
                                <img className="card-img-top" src={actor.image} alt="actorimg" />
                                <div className="card-body">
                                    <div className="card-title d-flex justify-content-between">
                                        <h5>{actor.name}</h5>
                                        <div className="badges">
                                            <span className="me-3">Birth year: {actor.birth_year}</span>
                                            <span>Nationality: {actor.nationality}</span>
                                        </div>
                                        
                                    </div>
                                    

                                </div>
                                
                                

                            </div>
                        </div>
                    )

                })}
            </div>
        </section>
        </>

    )
}