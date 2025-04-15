import { useEffect, useState } from 'react';
import MyCatsComponent from './MyCatsComponent';
import React from "react";
import "./App.css";
import Header from './Components/Header';


function App() {
    const [myCats, setMyCats] = useState([]);

    useEffect(() => {
      const getPhotos = async () => {
          try {
            const responses = await Promise.all([
              fetch(`https://api.thecatapi.com/v1/images/search`),
              fetch(`https://api.thecatapi.com/v1/images/search`),
              fetch(`https://api.thecatapi.com/v1/images/search`)
              ]);
              const data = await Promise.all(responses.map(response => response.json()));
              const images = data.map(item => item[0].url);
              setMyCats(images);
          } catch (error) {
              console.error("Ошибка при получении данных:", error);
          }
      };
      getPhotos();
  }, []);
  
    return(
      <div className="App">
        <div className="MT">
          <p>Лента</p>
          <p>Каналы</p>
          <p>Видео</p>
          <p>Сохраненное</p>
          <p>Уведомления</p>
          <p>Чаты</p>
        </div>
        
        <div>
          <div><Header /></div>

        <div className='cats'>
                {myCats.map((image, index) => (
                <MyCatsComponent key={index} image={image} />
                ))}
            </div>
        </div>
      </div>
    ) 
  }
  
  export default App;

