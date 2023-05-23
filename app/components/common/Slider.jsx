import { useState } from 'react';
import CardView from './CardView';

const Slider = ({ products, onClickCallback }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='h-100'>
            <div className="slider d-flex justify-content-center h-100 w-100">
                <div className="slider-controls">
                    <button className="direction-button" onClick={handlePrev}>
                        &lt;
                    </button>
                </div>
                <div className="slider-inner d-flex">
                    {products.slice(currentIndex, currentIndex + 1).map((product, index) => (
                        <div className="col-6 px-4" key={index}>
                            <CardView product={product} onClickCallback={onClickCallback} />
                        </div>
                    ))}
                </div>
                <div className="slider-controls">
                    <button className="direction-button" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>
            <div className="slider-dots">
                {products.map((_, index) => (
                    <span
                        key={index}
                        className={`slider-dot ${index  === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
