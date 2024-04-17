

const RealEstate = ({ estate }) => {

    const { estate_title, image, segment_name, description, price, status, area, location, facilities } = estate
    return (
        <div className="mx-auto">
            <div className="card w-96 image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default RealEstate;