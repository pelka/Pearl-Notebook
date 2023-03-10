import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

export default function Editor() {
  const [value, setValue] = useState('')

  return(
    <div className="bg-[#fff] p-6 w-[1280px] h-[1630px] drop-shadow-md rounded-sm">
      <ReactQuill theme="bubble" value={value} onChange={setValue} />
    </div>
  )


}