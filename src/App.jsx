import { useEffect, useState } from 'react'
import './App.css'
import Map from './Map'
import Header from './Header/Header'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getIPInfo() {
      const KEY = import.meta.env.VITE_IPIFY_KEY

      try {
        const res = await fetch('https://api.ipify.org')
        const ip = await res.text()
        console.log(ip)

        const url =`https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}&ipAddress=${ip}`
        const response = await fetch(url)
        const ipData = await response.json()
        setData(ipData)
        console.log(ipData)
        console.log(url)
      } catch (err) {
        console.log(err.message)
      }
    }


    getIPInfo()
  }, [])

  return (
    <>
      <Header data={data} />
      {data?
       <Map data={data} /> :
       <div className="loadingState">
         <i className="fa-solid fa-gear"></i>
       </div>
      }
    </>
  )
}

export default App
