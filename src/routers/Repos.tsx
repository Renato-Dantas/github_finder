import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardProps from "../types/card";

const Repos = () => {
  const login = localStorage.getItem("login");
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
    <div>
      <section>
        <h2>
          User: <span>{"Renato Dantas"}</span>
        </h2>
        <h3>Number of Repos:</h3> <span>{3}</span>
        <a>See on GitHub</a>
      </section>
      <section>
        <ul>
          {repos?.map((item: CardProps) => (
            <li>
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
