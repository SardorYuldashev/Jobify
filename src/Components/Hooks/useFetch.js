import axios from 'axios'
import { useState, useEffect } from 'react'

function useFetch (url) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {

    // let unmounted = false

    (async () => {
      try {
        isLoading(true)
        let data = await axios.get(url)
        // if (unmounted) return
        setData(data)
        isLoading(false)


      } catch (error) {
        
      }
    }) ()

    return () => {
      // unmounted = true
    }

  }, [url])

  return {data, isLoading}
}

export default useFetch