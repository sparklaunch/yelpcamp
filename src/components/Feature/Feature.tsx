import "./Feature.css";
import checkmark from "../../assets/Checkmark.svg";

function Feature({ text }: { text: string }) {
    return (
        <div className="Feature">
            <img src={checkmark} alt="Checkmark" />
            <p>{text}</p>
        </div>
    );
}

export default Feature;
