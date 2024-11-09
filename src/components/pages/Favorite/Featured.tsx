"use client";
import React from "react";
import styles from "./Featured.module.scss";
import { useFavoriteStore } from "../../../../store/useFavoriteStore";

const FavoriteList = () => {
  const { favorites, toggleFavorite } = useFavoriteStore();

  if (favorites.length === 0) {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "300px",
          fontSize: '50px'
        }}
      >
        Ваш список избранного пуст.
      </p>
    );
  }

  return (
    <div className={styles.favoriteList}>
      <h2>Wishlist</h2>
      <ul>
        {favorites.map((item) => (
          <li key={item.id} className={styles.favoriteItem}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.details}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Цена: ${item.price}</p>
              <button onClick={() => toggleFavorite(item)}>
                {favorites.some((fav) => fav.id === item.id)
                  ? "Удалить из избранного"
                  : "Добавить в избранное"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
