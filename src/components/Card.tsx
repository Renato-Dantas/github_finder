import CardProps from "../types/card";

const Card = ({ html_url, name, owner, updated_at }: CardProps) => {
  return (
    <div>
      <a href={html_url} target="_blank">
        <p>{name}</p>
      </a>
      <div>
        <ul>
          <li>
            Creator: <span>{owner.login}</span>
          </li>
          <li>
            Last Update: <span>{updated_at}</span>
          </li>
        </ul>
        <a href={html_url} target="_blank">
          <button>Visit now</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
