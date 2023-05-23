import { useState } from 'react';
import CardView from './CardView';

const Slider = ({ products, onClickCallback }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 2 : prevIndex - 2
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 2 ? 0 : prevIndex + 2
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index * 2);
    };

    return (
        <div className='h-100'>
            <div className="slider d-flex justify-content-center w-100">
                <div className="slider-controls">
                    <button className="slider-button" onClick={handlePrev}>
                        &lt;
                    </button>
                </div>
                <div className="slider-inner d-flex">
                    {products.slice(currentIndex, currentIndex + 2).map((product, index) => (
                        <div className="col-6 px-4" key={index}>
                            <CardView product={product} onClickCallback={onClickCallback} />
                        </div>
                    ))}
                </div>
                <div className="slider-controls">
                    <button className="slider-button" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>
            <div className="slider-dots">
                {products.slice(currentIndex, currentIndex + 2).map((_, index) => (
                    <span
                        key={index}
                        className={`slider-dot ${index * 2 === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
