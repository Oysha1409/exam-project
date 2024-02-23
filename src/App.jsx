
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Banner } from './component';
import Card from './component/card';

import 'react-loading-skeleton/dist/skeleton.css';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    await fetch(`${import.meta.env.VITE_API_URL}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }


  useEffect(() => {
    getData()
  }, [])
  console.log(data);

  return (
    <div className="container text-center mt-10">
     <Banner/>
      <div className="grid grid-cols-3 gap-[30px] mt-20">
        {data.length ? data.map((el) => (
              <Card key={el.id} {...el}/>
            ))
          : Array.from({ length: 20}).map((el) => (
              <Skeleton
                key={el}
                width={360}
                height={445}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
