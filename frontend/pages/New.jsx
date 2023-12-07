import React, { useState } from "react"
import FormInput from "../components/FormInput"

const New = () => {
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [html, setHtml] = useState("")

  return (
    <div className="p-6 max-w-xl">
      <h3 className="font-bold text-4xl my-5">Crea tu primer tutorial</h3>
      <form>
        <div className="flex gap-3 flex-col">
          <div className="mb-3">
            <label htmlFor="title" className="font-semibold text-2xl">
              Título del tutorial
            </label>
            <input
              className="border border-gray-300 w-[550px] rounded-lg active:border-gray-950 p-6 text-lg"
              value={title}
              onChange={(e) => {
                if (e.target.value.length <= 100) {
                  setTitle(e.target.value)
                }
              }}
            ></input>
            <span>{title.length}/100</span>
          </div>
          <div className="mb-3">
            <label htmlFor="html" className="font-semibold text-2xl">
              Cuerpo del tutorial
            </label>
            <textarea
              className="border border-gray-300 h-40 w-[550px] rounded-lg active:border-gray-950 p-6"
              value={html}
              onChange={(e) => {
                if (e.target.value.length <= 1000) {
                  setHtml(e.target.value)
                }
              }}
            ></textarea>
            <span>{html.length}/1000</span>
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="font-semibold text-2xl">
              Título del tutorial
            </label>
            <input
              className="border border-gray-300 w-[550px] rounded-lg active:border-gray-950 p-6 text-lg"
              value={tags}
              onChange={(e) => {setTags(e.target.value)}}
            ></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export { New }
