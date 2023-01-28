import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function New() {
    const [pirate, setPirate] = useState({
        name: "",
        crewPosition: "Captain",
        img: "",
        numOfChest: 0,
        pirateCatchPhrase: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true,
    });
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/pirates", {
                name: pirate.name,
                crewPosition: pirate.crewPosition,
                img: pirate.img,
                numOfChest: pirate.numOfChest,
                pirateCatchPhrase: pirate.pirateCatchPhrase,
                pegLeg: pirate.pegLeg,
                hookHand: pirate.hookHand,
                eyePatch: pirate.eyePatch,
            })
            .then((res) => {
                console.log(res);
                setPirate({});
                navigate("/");
                setErrors({});
            })
            .catch((err) => {
                console.log(err);
                setErrors(err?.response?.data?.errors);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "pegLeg" || name === "eyePatch" || name === "hookHand") {
            setPirate({
                ...pirate,
                [name]: e.target.checked,
            });
        } else {
            setPirate({
                ...pirate,
                [name]: value,
            });
        }
    };

    return (
        <div>
            <nav
                className="navbar d-flex justify-content-around"
                style={{ backgroundColor: "brown", color: "white" }}
            >
                <h2 className="text-center display-4" style={{ fontWeight: "bold" }}>
                    Pirate Crew
                </h2>
                <Link className="btn btn-info px-4" to={"/"}>
                    Crew Board
                </Link>
            </nav>
            <div className="container">
                <form onSubmit={handleSubmit} className="d-flex mt-5">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="name" style={{ fontWeight: "bold" }}>
                                Pirate Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={pirate.name}
                                onChange={handleChange}
                            />
                            {errors?.name && (
                                <span className="form-text text-danger">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                        <div className="form-group mt-5">
                            <label htmlFor="img" style={{ fontWeight: "bold" }}>
                                Image Url:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="img"
                                name="img"
                                value={pirate.img}
                                onChange={handleChange}
                            />
                            {errors?.img && (
                                <span className="form-text text-danger">
                                    {errors.img.message}
                                </span>
                            )}
                        </div>
                        <div className="form-group mt-5">
                            <label htmlFor="numOfChect" style={{ fontWeight: "bold" }}>
                                # of Treasure Chest:
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="numOfChest"
                                name="numOfChest"
                                value={pirate.numOfChest}
                                onChange={handleChange}
                            />
                            {errors?.numOfChest && (
                                <span className="form-text text-danger">
                                    {errors.numOfChest.message}
                                </span>
                            )}
                        </div>
                        <div className="form-group mt-5">
                            <label htmlFor="pirateCatchPhrase" style={{ fontWeight: "bold" }}>
                                Pirate Catch Phrase:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="pirateCatchPhrase"
                                name="pirateCatchPhrase"
                                value={pirate.pirateCatchPhrase}
                                onChange={handleChange}
                            />
                            {errors?.pirateCatchPhrase && (
                                <span className="form-text text-danger">
                                    {errors.pirateCatchPhrase.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group d-flex flex-column align-items-center justify-content-center">
                            <label htmlFor="crewPosition" style={{ fontWeight: "bold" }}>
                                Crew Position
                            </label>
                            <select
                                value={pirate.crewPosition}
                                onChange={handleChange}
                                name="crewPosition"
                                className="form-select-lg"
                            >
                                <option value="Captiain">Captain</option>
                                <option value="First Mate">First Mate</option>
                                <option value="Quarter Master">Quarter Master</option>
                                <option value="Boatswain">Boatswain</option>
                                <option value="Powder Monkey">Powder Monkey</option>
                            </select>
                        </div>
                        <div className="form-check mt-5 ">
                            <label htmlFor="pegLeg" style={{ fontWeight: "bold" }}>
                                Peg Leg:
                            </label>
                            <input
                                type="checkbox"
                                className="form-control"
                                id="pegLeg"
                                name="pegLeg"
                                checked={pirate.pegLeg}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-check mt-5">
                            <label htmlFor="eyePatch" style={{ fontWeight: "bold" }}>
                                Eye Patch:
                            </label>
                            <input
                                type="checkbox"
                                className="form-control"
                                id="eyePatch"
                                name="eyePatch"
                                checked={pirate.eyePatch}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-check mt-5">
                            <label htmlFor="hookHand" style={{ fontWeight: "bold" }}>
                                Hook Hand:
                            </label>
                            <input
                                type="checkbox"
                                className="form-control"
                                id="hookHand"
                                name="hookHand"
                                checked={pirate.hookHand}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-5 ml-3 btn btn-primary"
                            style={{ fontSize: "1.5rem" }}
                        >
                            Add Pirate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default New;
