import CardProps from "../types/card";
import style from "./Card.module.scss";

const Card = ({ html_url, name, owner, updated_at }: CardProps) => {
  return (
    <div className={style.card}>
      <a href={html_url} target="_blank">
        <p>{name}</p>
      </a>
      <div className={style.info}>
        <ul className={style.list}>
          <li>
            Creator: <span>{owner.login}</span>
          </li>
          <li>
            Last Update: <span>{updated_at}</span>
          </li>
        </ul>
        <a href={html_url} target="_blank" className={style.btn}>
          <button>Visit now</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
