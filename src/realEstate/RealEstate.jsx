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
                        <h2 className="w-8/12 card-title font-semibold text-2xl">{estate_title}</h2>
                        <p className="flex justify-end w-4/12 text-[#D93C23] text-xl font-bold">{status}</p>
                    </div>
                    <p className="font-semibold">{price}</p>
                    <Link to={`/estate/${id}`}>
                        <button className="w-32 font-semibold bg-[#053a37fa] px-2 py-3 rounded-2xl">View Property</button>
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