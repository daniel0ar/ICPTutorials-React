import { useCanister } from "@connect2ic/react";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Tutorial = () => {

    const [tutorial, setTutorial] = useState(null);
    const params = useParams();

    const [backend] = useCanister("backend");


    const fetchTutorial = async (id) => {
        const res = await backend.getPubByID(parseInt(id));
        console.log("Tutorial is: ", res[0]);
        setTutorial(res[0]);
    };

    useEffect(() => {
        fetchTutorial(params.id);
    }, [params]);

    return (
        <div>
            <div
                className="min-h-[85vh] px-20 pt-10 text-d3prop-light-black grid gap-10"
                style={{ gridTemplateColumns: "70fr 30fr" }}
            >
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-5xl">{tutorial?.content.title}</h2>
                        <span className="text-lg cursor-pointer underline">
                            {tutorial?.autor}
                        </span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl font-semibold">
                                Tutorial creado por {tutorial?.autor}
                            </h3>
                            <ul className="flex gap-5">
                                
                            </ul>
                            <p>{tutorial?.content.html}</p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export { Tutorial }