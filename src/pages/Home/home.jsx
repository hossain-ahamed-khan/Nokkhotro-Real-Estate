import { useLoaderData } from "react-router-dom";
import RealEstate from "../../realEstate/RealEstate";


const Home = () => {

    const realEstates = useLoaderData();

    return (
        <>
            <div className="w-5/6 mx-auto my-12">
                <div className="carousel rounded-xl">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto my-16 w-5/6">
                {
                    realEstates.map(estate => <RealEstate key={estate.id} estate={estate}></RealEstate>)
                }
            </div>
        </>
    );
};

export default Home;