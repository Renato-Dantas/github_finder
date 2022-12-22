import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./Search.module.scss";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className={styles.search}>
      <h2>Search an User</h2>
      <p>Find the best repos</p>
      <div className={styles.search_container}>
        <input
          type="text"
          placeholder="Type the user name"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
