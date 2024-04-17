import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const realEstates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = realEstates.find(estate => estate.id == idInt);

    const { estate_title, image, segment_name, description, price, status, area, location, facilities } = estate;

    return (
        <div className="font-vidaloka text-[#053A37] flex flex-col lg:flex-row my-16 gap-8">
            <div className="w-full lg:w-1/2">
                <img className="w-full mx-auto rounded-xl" src={image} alt="" />
            </div>
            <div className="w-full lg:w-1/2 bg-[#053a3746] rounded-xl p-8">
                <div className="text-4xl font-bold my-6">{estate_title}</div>
                <div className="mb-8">{description}</div>
                <div><span className="font-bold">Price:</span> {price}</div>
                <div><span className="font-bold">Status:</span> {status}</div>
                <div><span className="font-bold">Area:</span> {area}</div>
                <div><span className="font-bold">Segment:</span> {segment_name}</div>
                <div><span className="font-bold">Location:</span> {location}</div>
                <div><span className="font-bold">Facilities:</span> {
                    facilities.map((facility, index) => <li key={index}>{facility}</li>)
                }</div>
            </div>
        </div>
    );
};

export default CardDetails;