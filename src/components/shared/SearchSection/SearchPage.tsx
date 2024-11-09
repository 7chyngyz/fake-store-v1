"use client";
import React, { FC } from "react";
import scss from "./SearchPage.module.scss";
import { useSearchStore } from "../../../../store/useSerachStore";
import { useGetProductsQuery } from "@/redux/api/product";
import SkeletonCart from "@/components/ui/SkeletonCart";
import Link from "next/link";
import { LuEye } from "react-icons/lu";
import { useFavoriteStore } from "../../../../store/useFavoriteStore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import { Footer } from "antd/es/layout/layout";
import useCartStore, { CartItem } from "../../../../store/useBasketStore";

const SearchPage: FC = () => {
  const {  addToCart } = useCartStore();
  const { query } = useSearchStore();
  const { data: products = [], isLoading } = useGetProductsQuery(); 
  const { favorites, toggleFavorite } = useFavoriteStore();

  const isFavorite = (id: number) => favorites.some((item) => item.id === id);
  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

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
    <section className={scss.SearchPage}>
      <>
        <TopHeader />
        <Header />
      </>
      <div className="container">
        <div className={scss.content}>
          <h1>Search Results:</h1>
          <div className={scss.search_content}>
            {isLoading ? (
              [1, 2, 3, 4].map((n) => <SkeletonCart key={n} />)
            ) : filtered.length > 0 ? (
              filtered.map((product) => (
                <div className={scss.cart} key={product.id}>
                  <Link href={`/details/${product.id}`}>
                    <div className={scss.svg}>
                      <img src={product.image} alt={product.title} />
                    </div>
                  </Link>
                  <div className={scss.title}>
                    <h1>{truncateDescription(product.title, 20)}</h1>
                    <p>Цена: ${product.price}</p>
                    <button
                      className={scss.addToCartBtn}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add To Cart
                    </button>{" "}
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
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SearchPage;
