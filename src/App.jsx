import { useEffect, useState } from 'react'
import './App.css'
import Map from './Map'
import Header from './Header/Header'

function App() {
  const [data, setData] = useState(null)
  const [ipAddress, setIpAddress] = useState('')

  const handleSubmit = (term) => {
    setIpAddress(term)
    console.log(ipAddress)
    console.log(term)
  }

  useEffect(() => {
    async function getIPInfo() {
      const KEY = import.meta.env.VITE_IPIFY_KEY

      try {
        // const res = await fetch('https://api.ipify.org')
        // const ip = await res.text()
        // setIpAddress(ip)
        // console.log(ip)
        // console.log(ipAddress)

        // handleSubmit()
        // setIpAddress()

        const url =`https://api.ipgeolocation.io/ipgeo?apiKey=${KEY}` + `&ip=${ipAddress}`
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
  }, [ipAddress])

  return (
    <>
      {data ? (
        <>
          <Header data={data} onSubmit={handleSubmit} />
          <Map data={data} />
        </>
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
    </>
  );
}

export default App
