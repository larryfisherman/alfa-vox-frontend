import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Spinner } from "./components/Spinner";

const App = () => {
  const [skywalkerData, setSkywalkerData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://localhost:44304/api/skywalker")
      .then((res) => setSkywalkerData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="Container">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="Content">
          <ul>
            Films:
            {skywalkerData.films.map((film, index) => (
              <li key={index}>{film}</li>
            ))}
          </ul>
          <ul>
            Vehicles:
            {skywalkerData.vehicles.map((vehicle, index) => (
              <li key={index}>{vehicle}</li>
            ))}
          </ul>
          <ul>
            Starships:
            {skywalkerData.starships.map((starship, index) => (
              <li key={index}>{starship}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
