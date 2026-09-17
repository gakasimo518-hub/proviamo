import React from 'react';
import './UserCard.css';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => (
  <article className="user-card">
    <h2 className="user-name">{user.name}</h2>
    <p className="user-email">{user.email}</p>
  </article>
);

export default UserCard;