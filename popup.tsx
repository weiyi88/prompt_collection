import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16
      }}>
      <ul>
        <li>第一项</li>
      </ul>
      <ul>
        <li>第二项</li>
      </ul>
    </div>
  )
}

export default IndexPopup
