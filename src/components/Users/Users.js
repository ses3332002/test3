import { Filter } from '../Filter/Filter';
import { UsersList } from '../UsersList/UsersList';

import './Users.css';

export function Users() {
  return (
    <section className="users">
      <Filter />
      <UsersList />
    </section>
  );
}
