import React from 'react';
var handleSubmit = function (e) {
    e.preventDefault();
    console.log(e);
};
var AddRecipe = function () { return (React.createElement("form", { style: { display: 'flex', flexDirection: 'column' }, onSubmit: handleSubmit },
    React.createElement("label", { htmlFor: "name" }, "Name"),
    React.createElement("input", { type: "text", id: "name", placeholder: "Example dish" }),
    React.createElement("label", { htmlFor: "name" }, "Description"),
    React.createElement("input", { type: "text", id: "description", placeholder: "A real yummy example dish" }),
    React.createElement("label", { htmlFor: "name" }, "ImageURL"),
    React.createElement("input", { type: "text", id: "imageUrl", placeholder: "http://google.com/images/some-random-image" }),
    React.createElement("label", { htmlFor: "name" }, "ingredients"),
    React.createElement("input", { type: "text", id: "ingredients", placeholder: "tomato,onion,beef" }),
    React.createElement("button", { type: "submit" }, "Submit"))); };
export default AddRecipe;
