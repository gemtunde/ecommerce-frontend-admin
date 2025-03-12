import axios from "axios";
import React, { useEffect } from "react";
import { backendUrl, currency } from "../../App";
import { toast } from "react-toastify";
import { MdRemove } from "react-icons/md";

const List = ({ token }) => {
  const [productList, setProductList] = React.useState([]);

  const fetchProductList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list", {
        headers: { token },
      });
      if (response.data.success) {
        setProductList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <div>
      <p className="product-title">Product List</p>
      <div className="product-list-container">
        <div className="product-table-title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="action-title">Action</b>
        </div>
        {/* Product list */}
        {productList.map((product) => (
          <div className="product-row" key={product._id}>
            <img src={product.image[0]} alt="" className="product-image" />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>
              {currency}
              {product.price}
            </p>
            <MdRemove className="product-action" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
