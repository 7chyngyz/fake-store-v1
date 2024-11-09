"use client";
import React, { FC } from "react";
import scss from "./ExploreProducts.module.scss";
import { useGetProductsQuery } from "@/redux/api/product";
import SkeletonCard from "@/components/ui/SkeletonCart";
import Link from "next/link";
import { LuEye } from "react-icons/lu";
import { useFavoriteStore } from "../../../../store/useFavoriteStore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useCartStore, { CartItem } from "../../../../store/useBasketStore";

const ExploreProducts: FC = () => {
  const { data: product, isLoading } = useGetProductsQuery();
  const { favorites, toggleFavorite } = useFavoriteStore();
  const { addToCart } = useCartStore();
  const isFavorite = (id: number) => favorites.some((item) => item.id === id);

  const handleAddToCart = (item: IProductFromApi) => {
    const itemWith: CartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1,
    };

    addToCart(itemWith);
  };

  function truncateDescription(description: string, maxLength: number): string {
    return description.length <= maxLength
      ? description
      : `${description.slice(0, maxLength)}...`;
  }

  return (
    <section className={scss.ExploreProducts}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.title}>
            <div className={scss.box}></div>
            <h2>Our Products</h2>
          </div>
          <div className={scss.title2}>
            <h1>Explore Our Products</h1>
          </div>
          <div className={scss.carts}>
            {isLoading
              ? [1, 2, 3, 4].map((n) => <SkeletonCard key={n} />)
              : Array.isArray(product) &&
                product.map((product, index) => (
                  <div className={scss.cart} key={index}>
                    <Link href={`/details/${product.id}`}>
                      <div className={scss.svg}>
                        <img src={product.image} alt={product.title} />
                      </div>
                    </Link>
                    <div className={scss.title3}>
                      <h1>{truncateDescription(product.title, 20)}</h1>
                      <p>Цена: ${product.price}</p>
                      <button
                        className={scss.addToCartBtn}
                        onClick={() => handleAddToCart(product)}
                      >
                        Add To Cart
                      </button>
                      <div className={scss.icons}>
                        <div className={scss.favorite_button}>
                          <p
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(product);
                            }}
                          >
                            <FavoriteIcon
                              sx={{
                                color: isFavorite(product.id)
                                  ? "red"
                                  : "rgba(0, 0, 0, 0.229)",
                                marginLeft: "-40px",
                              }}
                            />
                          </p>
                        </div>
                        <Link href={`/details/${product.id}`}>
                          <LuEye className={scss.eye} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <button className={scss.btn1}>View All Products</button>
    </section>
  );
};

export default ExploreProducts;
