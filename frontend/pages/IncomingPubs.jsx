import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useCanister } from "@connect2ic/react";

const IncomingPubs = () => {
  const [publications, setPublications] = useState();
  const [ backend ] = useCanister("backend");

  const fetchPublications = async () => {
    const res = await backend.getIncomingPublication();
    console.log("INCOMING PUBS are: ", res);
    setPublications(res);
  }

  const handleApprove = (pubId) => {
    console.log("Approving PUB ID: ", pubId);
  }

  useEffect(() => {
    fetchPublications();
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-3xl leading-normal font-semibold text-d3prop-light-black mb-4">
        Publicaciones pendientes por aprobar
      </h1>
      <p className="leading-normal mb-5">
        Aquí podrás aprobar las publicaciones que tutores hayan enviado, para
        que los estudiantes puedan tomarlos.
      </p>
      <div className="h-[82.5vh] flex justify-start items-start">
        <div className="relative overflow-x-auto shadow-lg w-full m-20">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Titulo
                </th>
                <th scope="col" className="px-6 py-3">
                  Autor
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha Creación
                </th>
                <th scope="col" className="px-6 py-3">
                  Descripción
                </th>
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {publications?.map((pub, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap cursor-pointer"
                  >
                    {pub.content.title}
                  </th>
                  <td className="px-6 py-4">{pub.autor}</td>
                  <td className="px-6 py-4">{pub.date}</td>
                  <td className="px-6 py-4">{pub.content.html}</td>
                  <td className="px-6 py-4">
                    <Button primary outline onClick={() => handleApprove(index)}>Aprobar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export { IncomingPubs }
