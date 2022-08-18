import Layout from "../Layout/Layout";
import "./New.scss";

function New() {
    return (
        <Layout>
            <div className="New">
                <div className="header">
                    <h1>Add New Campground</h1>
                </div>
                <form>
                    <div className="field">
                        <label htmlFor="name">Campground Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Seven Sisters Waterfall"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="price">Price</label>
                        <input id="price" type="text" placeholder="$149" />
                    </div>
                    <div className="field">
                        <label htmlFor="image">Image</label>
                        <input
                            id="image"
                            type="text"
                            placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy-dayhike.html"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="detail">Description</label>
                        <textarea
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
