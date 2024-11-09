import Image from "next/image";
import styles from "./Arrival.module.scss";
import arrival from "../../../../../assets/ps5-slim.png";
import arrival1 from "../../../../../assets/woman.png";
import arrival2 from "../../../../../assets/kolonka.png";
import arrival3 from "../../../../../assets/duxi.png";

const Arrival = () => {
  return (
    <div className={styles.arrivalContainer}>
      <div className={`${styles.flexContainer} ${styles.relativeContainer}`}>
        <div className={styles.ps5Container}>
          <Image
            src={arrival}
            alt="PlayStation 5"
            className={styles.imageFull}
          />
          <div className={styles.ps5TextContainer}>
            <h1 className={styles.title}>PlayStation 5</h1>
            <p className={styles.description}>
              Black and White version of the PS5 <br />
              coming out on sale.
            </p>
            <button className={styles.shopButton}>Shop Now</button>
          </div>
        </div>

        <div>
          <div className={styles.womenCollection}>
            <Image
              src={arrival1}
              alt="Women's Collection"
              className={`${styles.imageFull} ${styles.ml28}`}
            />
          </div>

          <div className={styles.productWrapper}>
            <div className={styles.womenCollectionText}>
              <h1 className={`${styles.title} ${styles.fontBold}`}>
                Women’s Collections
              </h1>
              <p className={styles.description}>
                Featured woman collections that <br />
                give you another vibe.
              </p>
              <button className={styles.shopButton}>Shop Now</button>
            </div>

            <div className={styles.productList}>
              <div className={styles.productItem}>
                <Image
                  src={arrival2}
                  alt="Speakers"
                  className={styles.imageFull}
                />
                <div className={styles.productText}>
                  <h1 className={`${styles.title} ${styles.fontBold}`}>
                    Speakers
                  </h1>
                  <p className={styles.description}>Amazon wireless speakers</p>
                  <button className={styles.shopButton}>Shop Now</button>
                </div>
              </div>

              <div className={styles.productItem}>
                <Image
                  src={arrival3}
                  alt="Perfume"
                  className={styles.imageFull}
                />
                <div className={styles.productText}>
                  <h1 className={`${styles.title} ${styles.fontBold}`}>
                    Perfume
                  </h1>
                  <p className={styles.description}>GUCCI INTENSE OUD EDP</p>
                  <button className={styles.shopButton}>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
