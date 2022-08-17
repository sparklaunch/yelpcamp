import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { CampContext } from "../../Camps";
import "./CampDetail.scss";

function CampDetail() {
    const { campID } = useParams();
    const camps = useContext(CampContext);
    const campsLength = camps.length;
    if (parseInt(campID!) >= campsLength) {
        return <Navigate replace to="/notfound" />;
    }
    const targetCamp = camps.filter((camp) => camp.id === parseInt(campID!))[0];
    return <div>{targetCamp.name}</div>;
}

export default CampDetail;
