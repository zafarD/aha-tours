import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
      setTours(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }
  if(tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no more tours left</h2>
        <button type="button" className="btn" style={{marginTop: "2rem"}} onClick={() => fetchData()}>
          refresh
        </button>
      </div>
    </main>
  }

  return <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
};

export default App;
