import { Link } from "react-router-dom";

// {
//     "key": 3,
//         "title": "Test Electronics",
//             "price": 40.20,
//                 "description": "This is a Gaming PC",
//                     "category": "Electronics",
//                         "image": "",
//                             "rating": { "rate": 4.5, "count": 10 }
// }

const AddProduct = () => {
    return (
        <>
            <div className="container">
                <h1 className="text-center">Add Product</h1>

                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form>

                            <div className="form-group mb-3">
                                <label htmlFor="name">Product Name</label>
                                <input type="text" name="name" id="name" className="form-control"
                                    placeholder="Enter Product Name"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="price">Product Price</label>
                                <input type="text" name="price" id="price" className="form-control"
                                    placeholder="Enter Product Price"

                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="category">Product Category</label>
                                <select name="category" id="category" className="form-control">
                                    <option value="">Select Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Mobile">Mobile</option>
                                    <option value="Clothes">Clothes</option>
                                </select>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="quantity">Product Quantity</label>
                                <input type="text" name="quantity" id="quantity" className="form-control"
                                    placeholder="Enter Product Quantity"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="description">Product Description</label>
                                <textarea name="description" id="description" cols="30" rows="5" className="form-control"
                                    placeholder="Enter Product Description"
                                ></textarea>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="image">Product Image</label>
                                <input type="file" name="image" id="image" className="form-control h-100" />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="rate">Product Rating</label>
                                <input type="text" name="rate" id="rate" className="form-control"
                                    placeholder="Rating / 10"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <button type="submit" className="btn btn-primary">Add Product</button>
                                <Link to="/products" className="btn btn-danger ms-3">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct