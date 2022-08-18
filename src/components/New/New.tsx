import { FormEvent, useState } from "react";
import Layout from "../Layout/Layout";
import "./New.scss";

function New() {
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [detail, setDetail] = useState<string>("");
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <Layout>
            <div className="New">
                <div className="header">
                    <h1>Add New Campground</h1>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="field">
                        <label htmlFor="name">Campground Name</label>
                        <input
                            required
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                            value={name}
                            id="name"
                            type="text"
                            placeholder="Seven Sisters Waterfall"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="price">Price</label>
                        <input
                            required
                            id="price"
                            type="number"
                            value={price}
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}
                            placeholder="$149"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="image">Image</label>
                        <input
                            value={image}
                            onChange={(event) => {
                                setImage(event.target.value);
                            }}
                            id="image"
                            type="text"
                            placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy-dayhike.html"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="detail">Description</label>
                        <textarea
                            value={detail}
                            onChange={(event) => {
                                setDetail(event.target.value);
                            }}
                            id="detail"
                            rows={10}
                            placeholder="Write the description..."
                        />
                    </div>
                    <button type="submit">Add Campground</button>
                </form>
            </div>
        </Layout>
    );
}

export default New;
