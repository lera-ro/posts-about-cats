import { useEffect, useState } from 'react';
import MyCatsComponent from './Components/MyCatsComponent';
import React from "react";
import "./App.css";
import Header from './Components/Header';
import mockData from './Components/mockData';
import Navbar from './Components/Navbar';

function App() {
    const [posts, setPosts] = useState([]);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(mockData);
                    }, 1000);
                });
                setPosts(data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };
        getPosts();
    }, []);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY < 10) {
            setIsHeaderVisible(true);
        } else if (currentScrollY > lastScrollY) {
            setIsHeaderVisible(false);
        } else {
            setIsHeaderVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Header isVisible={isHeaderVisible} />
                <div className="posts">
                    {posts.map((post) => (
                        <MyCatsComponent key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;