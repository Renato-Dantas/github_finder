import { useState } from "react";
import { UserProps } from "../types/user";
import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);

    const data = await fetch(`https://api.github.com/users/${userName}`).then(
      (resp) => resp.json()
    );

    if (data.message == "Not Found") {
      setError(true);
      return;
    }
    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
