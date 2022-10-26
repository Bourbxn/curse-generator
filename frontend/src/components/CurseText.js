import React,{useState} from 'react'
import axios from 'axios'
import "../css/CurseText.css"

const Curse = () => {
  const [text,setText] = useState("Click button to get a curse.")

  const fetch = async () => {
    const query = await axios.get(`${process.env.REACT_APP_BACKEND}`)
    if(query.status === 200){
      setText(query.data.text)
    }
  }
  
  
  return (
    <div className="layout">
      <div className="m-auto">
        <h3 className="text">{text}</h3>
        <div className="button-layout">
          <button className="button" onClick={fetch}>Click me!</button>
        </div>
      </div>
    </div>
  )
}

export default Curse