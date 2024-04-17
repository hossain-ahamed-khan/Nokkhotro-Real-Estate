import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const RealEstate = ({ estate }) => {

    const { id, estate_title, image, price, status } = estate;
    return (
        <div className="mx-auto">
            <Link to={`/estate/${id}`}>
                <div className="card w-96 image-full">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{estate_title}</h2>
                        <p className="">{price}</p>
                        <p className="flex justify-end items-end">{status}</p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

RealEstate.propTypes = {
    estate: PropTypes.object,
}

export default RealEstate;