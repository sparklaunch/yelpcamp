import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import CampContext from "../../CampContext";
import { UserContext } from "../../Users";
import Layout from "../Layout/Layout";
import "./CampDetail.scss";

function CampDetail() {
    const { campID } = useParams();
    const { camps } = useContext(CampContext)!;
    const users = useContext(UserContext);
    const campsLength = camps.length;
    if (parseInt(campID!) >= campsLength) {
        return <Navigate replace to="/notfound" />;
    }
    const targetCamp = camps.filter((camp) => camp.id === parseInt(campID!))[0];
    const { image, name, rate, detail, submitterID } = targetCamp;
    const submitter = users.filter((user) => user.id === submitterID)[0];
    return (
        <Layout>
            <div className="CampDetail">
                <div className="map">
                    <img src="/maps/Map.png" alt="Preview Map" />
                </div>
                <div className="content">
                    <div className="image">
                        <img src={`/camps/${image}`} alt={name} />
                    </div>
                    <div className="header">
                        <h1>{name}</h1>
                        <p>${rate}/night</p>
                    </div>
                    <div className="main-content">
                        <p>{detail}</p>
                    </div>
                    <div className="submitter">
                        <p>Submitted by {submitter.name}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CampDetail;
