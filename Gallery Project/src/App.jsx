import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
    setUserData(response.data)
    console.log(userData);
    
  }

  useEffect(function () {
   getData() 
  }, [])

  let printUserData = " "

  if (userData.length > 0) {
    printUserData = userData.map(function (elem,idx) {
      return (
        <a href={elem.url} target='_blank'>
          <div>
            <div className="h-40 w-40 bg-white rounded-2xl overflow-hidden ">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </div>
        </a>
      );
    })
  }

  return (
    <div className="bg-black h-full p-4 text-white">

      <div className='flex flex-wrap gap-4'>
      {printUserData}
      </div>
    </div>
  );
}

export default App