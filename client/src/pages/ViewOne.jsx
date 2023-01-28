import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewOne() {
    const { id } = useParams();
    const [pirate, setPirate] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pirates/${id}`)
            .then((res) => {
                console.log(res.data);
                setPirate(res.data);
            })
            .catch((err) => console.log(err));
    }, [id, pirate.pegLeg, pirate.eyePatch, pirate.hookHand]);

    const handlePegLeg = () => {
        axios
            .put(`http://localhost:8000/api/pirates/${id}`, {
                ...pirate,
                pegLeg: !pirate.pegLeg,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlEyePatch = () => {
        axios
            .put(`http://localhost:8000/api/pirates/${id}`, {
                ...pirate,
                eyePatch: !pirate.eyePatch,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleHookHand = () => {
        axios
            .put(`http://localhost:8000/api/pirates/${id}`, {
                ...pirate,
                hookHand: !pirate.hookHand,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <nav
                className="navbar d-flex justify-content-around"
                style={{ backgroundColor: "brown", color: "white" }}
            >
                <h2 className="text-center display-4" style={{ fontWeight: "bold" }}>
                    {pirate.name}
                </h2>
            </nav>
            <div className="container d-flex justify-content-around mt-5">
                <div
                    className="column d-flex flex-column justify-content-around"
                    style={{ width: "40%" }}
                >
                    <img className="img-fluid" src={pirate.img} alt={pirate.name} />
                    <h2>"{pirate.pirateCatchPhrase}"</h2>
                </div>
                <div className="column" style={{ width: "40%" }}>
                    <div className="card">
                        <h2 className="card-title display-3" style={{ fontWeight: "bold" }}>
                            About
                        </h2>
                        <div className="mt-5 card-body d-flex flex-column text-left">
                            <h3>Position : {pirate.crewPosition}</h3>
                            <h3 className="mt-3">Treasures : {pirate.numOfChest}</h3>
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="mt-3">
                                    Peg Leg : {pirate.pegLeg ? "Yes" : "No"}
                                </h3>
                                <button
                                    style={{ backgroundColor: pirate.pegLeg ? "red" : "green" }}
                                    onClick={() => {
                                        setPirate({ ...pirate, pegLeg: !pirate.pegLeg });
                                        handlePegLeg();
                                    }}
                                    className="btn btn-success"
                                >
                                    {pirate.pegLeg ? "No" : "Yes"}
                                </button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="mt-3">
                                    Eye Patch : {pirate.eyePatch ? "Yes" : "No"}
                                </h3>
                                <button
                                    style={{ backgroundColor: pirate.eyePatch ? "red" : "green" }}
                                    onClick={() => {
                                        setPirate({ ...pirate, eyePatch: !pirate.eyePatch });
                                        handlEyePatch();
                                    }}
                                    className="btn btn-success"
                                >
                                    {pirate.eyePatch ? "No" : "Yes"}
                                </button>
                            </div>
                            <div
                                className="d-flex justify-content-between align-items-center"
                                style={{}}
                            >
                                <h3 className="mt-3">
                                    Hook Hand : {pirate.hookHand ? "Yes" : "No"}
                                </h3>
                                <button
                                    style={{ backgroundColor: pirate.hookHand ? "red" : "green" }}
                                    onClick={() => {
                                        setPirate({ ...pirate, hookHand: !pirate.hookHand });
                                        handleHookHand();
                                    }}
                                    className="btn btn-success"
                                >
                                    {pirate.hookHand ? "No" : "Yes"}
                                </button>
                            </div>
                        </div>
                        <Link style={{ "padding": "0.5rem 5rem", fontSize: "3rem" }} className="btn btn-info" to={"/"}>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewOne;
