import React from 'react';
import img1 from '../../assets/imagegallery/img1.jpg'
import img2 from '../../assets/imagegallery/img2.jpg'
import img3 from '../../assets/imagegallery/img3.webp'
import img4 from '../../assets/imagegallery/img4.webp'
import img5 from '../../assets/imagegallery/img5.jpg'
import img6 from '../../assets/imagegallery/img6.jpg'
import img7 from '../../assets/imagegallery/img7.jpg'
import img8 from '../../assets/imagegallery/img8.jpg'

const ImageGallery = () => {
    return (
        <div>
            <h1 className='text-center text-2xl'>Image gallery</h1>
            <section className="py-6  text-gray-50">
                <div className=" grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={img1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img3} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img4} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img5} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img6} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img7} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={img8} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://bu.edu.bd/buPrev/wp-content/uploads//photo-gallery/Image00030.jpg" />
                    <img src="https://gallery.cub.ac.bd/var/albums/Web-Photos/CUB/Home/apply-page/1.jpg?m=1686117079" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    );
};

export default ImageGallery;