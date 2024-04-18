import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const RealEstate = ({ estate }) => {

    const { id, estate_title, image, price, status } = estate;
    return (
        <div>
            <div className="card w-full image-full">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <div className="w-full flex">
                        <h2 className="w-3/4 card-title font-semibold text-2xl">{estate_title}</h2>
                        <p className="flex justify-end w-1/4 text-[#D93C23] text-lg font-semibold">{status}</p>
                    </div>
                    <p className="font-semibold">{price}</p>
                    <Link to={`/estate/${id}`}>
                        <button className="w-32 font-semibold bg-[#053a37fa] px-2 py-2 rounded-xl">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

RealEstate.propTypes = {
    estate: PropTypes.object,
}

export default RealEstate;