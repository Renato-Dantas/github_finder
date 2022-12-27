import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardProps from "../types/card";
import styles from "./repos.module.scss";

const Repos = () => {
  const login = localStorage.getItem("login");
  const avatar: string = localStorage.getItem("avatar");
  const api = `https://api.github.com/users/${login}/repos`;

  const [repos, setRepos] = useState([]);

  async function loadRepos() {
    const data = await fetch(api);
    const repos = await data.json();
    setRepos(repos);
  }

  useEffect(() => {
    loadRepos();
    console.log(repos);
  }, []);

  return (
    <div className={styles.repos}>
      <section className={styles.head}>
        <div>
          <h2>
            User: <span>{login}</span>
          </h2>
          <h3>
            Number of Repos: <span>{repos.length}</span>
          </h3>
        </div>
        <div className={styles.profile}>
          {avatar && <img className={styles.avatar} src={avatar} alt={login} />}
          <a target="_blank" href={api}>
            See on GitHub
          </a>
        </div>
      </section>
      <section className={styles.body}>
        <ul>
          {repos?.map((item: CardProps) => (
            <li key={item.name}>
              <Card
                html_url={item.html_url}
                name={item.name}
                owner={item.owner}
                updated_at={item.updated_at}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Repos;
