import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={img1}
            className="w-full" />
          <div className="absolute top-0 flex items-center left-0 h-full text-white right-5 pl-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='space-y-7'>
                <h2 className='lg:text-6xl w-1/3 font-extrabold'>Affordable Price for Car Servicing</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi?</p>
                <div className='flex gap-5 mt-5'>
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full" />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full" />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full" />
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;