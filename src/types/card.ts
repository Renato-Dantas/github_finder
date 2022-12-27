export default interface CardProps {
  html_url: string;
  name: string;
  owner: {
    login: string;
    avatar_url?: string;
  };
  updated_at: string;
}
