import { useEffect, useState } from 'react';
import MyCatsComponent from './Components/MyCatsComponent';
import React from "react";
import "./App.css";
import Header from './Components/Header';
import mockData from './Components/mockData';
import Navbar from './Components/Navbar';

function App() {
    const [myCats, setMyCats] = useState([]);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const getPhotos = async () => {
            try {
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(mockData);
                    }, 1000);
                });
                
                const images = data.map(item => item.url);
                setMyCats(images);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };
        getPhotos();
    }, []);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setIsHeaderVisible(false);
        } else {
            setIsHeaderVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Header isVisible={isHeaderVisible} />
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