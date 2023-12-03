import React, { Component, useState } from 'react';
import './Gallerystyle.scss';
import CloseIcon from '@mui/icons-material/Close';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Photo } from '@mui/icons-material';

function Gallery () {
    

    let photos = [
        {
            id:0,
            className: 'gallery-photo photo1',
            imgSrc: require('../Gallery/baby-1399332_640.jpg'),
            description: 'Sesja dziecięca Karola'
        },
        {
            id:1,
            className: 'gallery-photo photo2',
            imgSrc: require('../Gallery/girl-1811875_640.jpg'),
            description: 'Sesja do kalendarza'
        },
        {
            id:2,
            className: 'gallery-photo photo3',
            imgSrc: require('../Gallery/bride-5427659_640.jpg'),
            description: 'Sesja ślubna'
        },
        {
            id:3,
            className: 'gallery-photo photo4',
            imgSrc: require('../Gallery/wedding-2538461_640.jpg'),
            description: 'Sesja ślubna'
        },
        {
            id:4,
            className: 'gallery-photo photo5',
            imgSrc: require('../Gallery/woman-6721249_640.jpg'),
            description: 'Sesja do kalendarza'
        },
        {
            id:5,
            className: 'gallery-photo photo6',
            imgSrc: require('../Gallery/anna-deli-myenMNB12uk-unsplash.jpg'),
            description: 'Sesja modelingowa z psem'
        },
        {
            id:6,
            className: 'gallery-photo photo7',
            imgSrc: require('../Gallery/kids-783520_640.jpg'),
            description: 'Sesja urodzinowa Marysi'
        },
        {
            id:7,
            className: 'gallery-photo photo8',
            imgSrc: require('../Gallery/victoria-priessnitz-pU_A9uhqcBU-unsplash.jpg'),
            description: 'Sesja ślubna Wiktorii i Rafała'
        },
        {
            id:8,
            className: 'gallery-photo photo9',
            imgSrc: require('../Gallery/cap-2923677_640.jpg'),
            description: 'Sesja dziecięca Piotrka'
        },
        {
            id:9,
            className: 'gallery-photo photo10',
            imgSrc: require('../Gallery/james-kovin-c83l2vcz2VE-unsplash.jpg'),
            description: 'Sesja plenerowa'
        },
        {
            id:10,
            className: 'gallery-photo photo11',
            imgSrc: require('../Gallery/carlos-macias-ay9oC7YpDbw-unsplash.jpg'),
            description: 'Sesja plenerowa'
        },
    ]

    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

    const handlePhotoClick = (index) => {
      setSelectedPhotoIndex(index);
    };
  
    const handlePrevPhoto = () => {
      setSelectedPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };
  
    const handleNextPhoto = () => {
      setSelectedPhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
        <div className={`popup ${selectedPhotoIndex !== null ? 'open' : ''}`}>
            <CloseIcon onClick={() => setSelectedPhotoIndex(null)}/>
            {selectedPhotoIndex !== null && (
                <div className='popup-photo'>
                    <img src={photos[selectedPhotoIndex].imgSrc} />
                    <p>{photos[selectedPhotoIndex].description}</p>
                    <FaArrowLeft className="arrow-icon arrow-left" onClick={handlePrevPhoto}/>
                    <FaArrowRight className="arrow-icon arrow-right" onClick={handleNextPhoto} />
                </div>
        )}
        </div>
        <div className='gallery' id='gallery'>
			<h2 className='section-title'>Galeria</h2>
            <div className='photos'>
            {photos.map((item, index) => { 
                return (
                    <div className={item.className} key={index}>
                        <img src={item.imgSrc} onClick={() => handlePhotoClick(index)}/>
                    </div>                
                )               
            })
            }
            </div>
        </div>
        </>
    );
}

export default Gallery;