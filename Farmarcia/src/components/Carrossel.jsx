import React, { useState } from 'react';
import './Carrossel.css'; // Importando o CSS para estilização

const Carrossel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'farmarciasUm.jpg', // Substitua pelos caminhos das suas imagens
        'farmarciasDois.jpg',
        'farmarciasTres.jpg',
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carrossel">
            <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className='button-carrossel'>
                <button onClick={prevSlide}>&#10094;</button>
                <button onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
};

export default Carrossel;
