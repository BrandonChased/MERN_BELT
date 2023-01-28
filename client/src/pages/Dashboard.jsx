import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

function Dashboard() {
    const [pirates, setPirates] = useState([])
    const [isDeleted, setIsDeleted] = useState(false);

    function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => {
                console.log(res.data)
                const data = [...res.data].sort(compare)
                setPirates(data)
            })
            .catch(err => console.log(err))
    }, [isDeleted])

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8000/api/pirates/${id}`)
            .then((res) => {
                console.log(res.data);
                setIsDeleted(!isDeleted);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <nav className='navbar d-flex justify-content-around' style={{ backgroundColor: "brown", color: "white" }}>
                <h2 className='text-center display-4' style={{fontWeight: "bold"}}>Pirate Crew</h2>
                <Link className='btn btn-info px-4' to={"/new"}>Add Pirate</Link>
            </nav>
            <div className='container'>
                {
                    pirates &&
                    pirates.map(pirate => {
                        return (
                            <div key={pirate._id} className='card mt-3'>
                                <div className='card-body d-flex align-items-center'>
                                    <div className='col'>
                                        <img className='img-fluid' src={pirate.img} alt={pirate.name}/>
                                    </div>
                                    <div className='col d-flex flex-column align-items-center' >
                                        <div className='row'>
                                            <h3>{pirate.name}</h3>
                                        </div>
                                        <div className='row'>
                                            <Link to={`/view/${pirate._id}`} className='btn btn-info'>View Pirate</Link>
                                            <button onClick={() =>handleDelete(pirate._id)} className='btn btn-primary'>Walk the Plank</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard