import React from "react";
import upload_img from "../../assets/upload_image.png";
import "./Add.css";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../../App";

const Add = () => {
  const [sizes, setSizes] = React.useState([]);
  const [image1, setImage1] = React.useState("");
  const [image2, setImage2] = React.useState("");
  const [image3, setImage3] = React.useState("");
  const [image4, setImage4] = React.useState("");

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("Men");
  const [price, setPrice] = React.useState("");
  const [bestseller, setBestseller] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      image1 && formData.append("image1", image1 ? image1 : null);
      image2 && formData.append("image2", image2 ? image2 : null);
      image3 && formData.append("image3", image3 ? image3 : null);
      image4 && formData.append("image4", image4 ? image4 : null);

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", bestseller);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="">
        <p className="form-label">Upload Images</p>
        <div className="image-upload-container">
          <label htmlFor="image1">
            <img
              src={!image1 ? upload_img : URL.createObjectURL(image1)}
              alt=""
              className="upload-preview"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              className="input-form"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              src={!image2 ? upload_img : URL.createObjectURL(image2)}
              alt=""
              className="upload-preview"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              className="input-form"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              src={!image3 ? upload_img : URL.createObjectURL(image3)}
              alt=""
              className="upload-preview"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              className="input-form"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              src={!image4 ? upload_img : URL.createObjectURL(image4)}
              alt=""
              className="upload-preview"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              className="input-form"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="form-group">
        <p className="form-label">Product name</p>
        <input
          type="text"
          className="form-input"
          placeholder="Product Name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="form-group">
        <p className="form-label">Product description</p>
        <textarea
          type="text"
          className="form-input"
          placeholder="Product description"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div className="form-group-horizontal">
        <div className="">
          <p className="form-label"> Product category</p>
          <select
            name=""
            id=""
            className="form-select"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="form-group">
          <p className="form-label">Product price</p>
          <input
            type="number"
            className="form-input"
            placeholder="Product price"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>
      <div>
        <p className="form-label">Product sizes</p>
        <div className="size-options">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              className={`size-option ${
                sizes.includes(size) ? "selected" : ""
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="bestseller"
          className="checkbox-input"
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
        />
        <label htmlFor="bestseller">Add to bestseller</label>
      </div>
      <button className="submit-button" type="submit">
        Add Product
      </button>
    </form>
  );
};

export default Add;
