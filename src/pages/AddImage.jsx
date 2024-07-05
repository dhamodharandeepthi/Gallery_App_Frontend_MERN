import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  getAllImages,
  postNewImage,
} from "../redux/reducers/gallerySlice";
const AddImage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const formdata = new FormData();
  formdata.append("image", file);
  formdata.append("category", category);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  const { categories } = useSelector((state) => state.gallery);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewImage(formdata));

    navigate("/");
  };
  return (
    <div className="container">
      <div className="row ">
        <div align="center">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Image:</label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-4">
              <label for="exampleInputEmail1">Category:</label>
              <select
                className="form-control custom-select"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" selected disabled>
                  Please Select
                </option>
                {categories &&
                  categories.map((item) => {
                    return <option value={item._id}>{item.name}</option>;
                  })}
              </select>
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Upload
            </button>
          </form>

          <button className="btn btn-primary">Go to Home</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default AddImage;
