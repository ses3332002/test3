import { useState } from 'react';
import Filter from '../Filter/Filter';
import UsersList from '../UsersList/UsersList';
import { defaultGender } from '../../data/variables';
import './Users.css';

export default function Users() {
  let [selectedGender, setSelectedGender] = useState(defaultGender);
  return (
    <section className="users">
      <Filter selectedGender={selectedGender} setSelectedGender={setSelectedGender} />
      <UsersList selectedGender={selectedGender} />
    </section>
  );
}
