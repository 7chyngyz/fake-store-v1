import React from "react";
import scss from "./Categories.module.scss";

const Categories = () => {
  return (
    <section className={scss.Categories}>
      <div className="container">
        <div className={scss.content}>
          <select>
            <option>Woman&apos;s Fashion</option> 
          </select>
          <select>
            <option>Men&apos;s Fashion</option> 
          </select>
          <ul>
            <li>Electronics</li>
            <li>Home &amp; Lifestyle</li> 
            <li>Medicine</li>
            <li>Sports &amp; Outdoor</li> 
            <li>Baby&apos;s &amp; Toys</li> 
            <li>Groceries &amp; Pets</li> 
            <li>Health &amp; Beauty</li> 
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Categories;
