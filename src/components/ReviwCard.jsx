
const ReviwCard = ({name}) => {
    return (
        <div className="card w-96 bg-[#0E477D] text-primary-content my-10">
            <div className="card-body">
                <h2 className="card-title">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    </div>
                </h2>
                <p>Visited last summer and had an amazing experience! The local guides were knowledgeable, and the attractions were breathtaking. Will definitely come back!
                Visited last summer and had an amazing experience! The local guides were knowledgeable, and the attractions were breathtaking. Will definitely come back!

                </p>
                <div className="card-actions justify-end text-xl">
                    <h1>{ name  }</h1>
                </div>
            </div>
        </div>
    );
};

export default ReviwCard;