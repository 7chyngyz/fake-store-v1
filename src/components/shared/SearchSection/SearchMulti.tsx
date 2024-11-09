"use client";
import scss from "./SearchMulti.module.scss";
import { useRouter } from "next/navigation";
import { useSearchStore } from "../../../../store/useSerachStore";
import { IoMdCheckmark } from "react-icons/io";

const SearchMulti = () => {
  const { query, setQuery } = useSearchStore();
  const router = useRouter();

  const handleSearch = () => {
    if (query) {
      router.push(`/search/${query}`);
    }
  };

  return (
    <div className={scss.search_input_wrapper}>
      <input
        className={scss.search_input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="What are you looking for?"
      />
      <button onClick={handleSearch}>
        <IoMdCheckmark />
      </button>
    </div>
  );
};

export default SearchMulti;
