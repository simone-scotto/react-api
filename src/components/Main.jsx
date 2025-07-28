import { useState } from "react"






export default function Main () {

    const urlActress = "https://lanciweb.github.io/demo/api/actresses/"
    const urlActors = "https://lanciweb.github.io/demo/api/actors/"


    const [actorsData, setActorsData] = useState([])


    function  handleClickActress () {
        fetch(urlActress)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setActorsData(data)
            
        })

    
    }




    function  handleClickActors () {
        fetch(urlActors)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setActorsData(data)
            
        })

    
    } 


    function handleClickAllactors () {

        const fetchActress = fetch(urlActress)
                            .then(res => res.json());
        const fetchActors = fetch(urlActors)
                            .then(res => res.json());
        Promise.all([fetchActors, fetchActress])
        .then(([actors, actress]) => {
            const allActors = [...actors, ...actress]
            setActorsData(allActors)

        })
      /*   fetch(urlActors, urlActress)
        
        .then(res => res.json())
       
        .then(data => {

            console.log(data);
            setActorsData([...urlActors.data, ...urlActress.data])
            
        }) */
    }

    
    return (
        <>
        <section className="btn_section d-flex justify-content-center gap-3 p-3">
            <button onClick={handleClickActress} className="btn btn-primary ">Load Actress Cards</button>
            <button onClick={handleClickActors} className="btn btn-primary ">Load Actror Cards</button>
            <button onClick={handleClickAllactors} className="btn btn-primary ">Load All Actror Cards</button>
        
        </section>
        <section className="actors">
            <div className="row row-cols-1 row-cols-md-3 g-2">
                {actorsData.map((actress, index) => {
                    return (
                        <div key={index} className="col">
                            <div className="card h-100 d-flex flex-row">
                                <div className=" row">
                                    <div className="col-4">
                                        <img className=" rounded-start" src={actress.image} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body">
                                            <div className="card-title d-flex justify-content-between">
                                                <h5>{actress.name}</h5>
                                                <div className="badges">
                                                    <span className="me-3">Birth year: {actress.birth_year}</span>
                                                    <span>Nationality: {actress.nationality}</span>
                                                </div>
                                                
                                            </div>
                                            <p className="card-text text-body-secondary">{actress.biography}</p>
                                            <p className="card-text text-body-secondary">{actress.awards}</p>                                   
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