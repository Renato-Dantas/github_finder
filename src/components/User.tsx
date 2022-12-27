import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./User.module.scss";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  const saveUser = () => {
    localStorage.setItem("login", login);
    localStorage.setItem("avatar", avatar_url);
  };

  return (
    <div className={styles.user}>
      <img src={avatar_url} alt={login} />
      <h1>{login}</h1>
      {location && (
        <p className={styles.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}

      <div className={styles.stats}>
        <div>
          <p>Followers</p>
          <p className={styles.stats_numbers}>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p className={styles.stats_numbers}>{following}</p>
        </div>
      </div>
      <Link to={`/repos`} onClick={() => saveUser()}>
        See the best projects!
      </Link>
    </div>
  );
};

export default User;
