import Camp from "../../utils/Camp";
import "./Camp.scss";

function CampItem({ name, description, image }: Camp) {
    return (
        <div className="CampItem">
            <div className="image">
                <img src={`/camps/${image}`} alt={name} />
            </div>
            <div className="name">
                <p>{name}</p>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="view-campground-button">
                <button>View Campground</button>
            </div>
        </div>
    );
}

export default CampItem;
