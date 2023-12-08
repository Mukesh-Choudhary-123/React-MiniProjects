import React, { useState } from "react";

const CommentsForm = () => {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give a Comment !</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks </label>
        <textarea
          type="text"
          placeholder="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        />
        <br />
        <br />
        <label htmlFor="rating">Rate Us </label>
        <input
          type="number"
          min={1}
          max={5}
          placeholder="rating"
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default CommentsForm;
