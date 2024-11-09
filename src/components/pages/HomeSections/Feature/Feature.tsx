import styles from "./Feature.module.scss";
import Arrival from "./Arrival/Arrival";

const FeaturedPage = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.featuredSection}>
          <div className={styles.redBox}></div>
          <span className={styles.featuredText}>Featured</span>
        </div>

        <div className={styles.arrivalSection}>
          <h1 className={styles.newArrivalText}>New Arrival</h1>
        </div>
      </div>
      <Arrival />
    </>
  );
};

export default FeaturedPage;
