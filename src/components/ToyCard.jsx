import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  const { id, name, image, likes } = toy;

  // PATCH: Increase likes by 1
  function handleLikeClick() {
    const updatedLikes = {
      likes: likes + 1,
    };

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedLikes),
    })
      .then((res) => res.json())
      .then((updatedToy) => onUpdateToy(updatedToy));
  }

  // DELETE: Remove toy when donated
  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteToy(id));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
