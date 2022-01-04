import { useContext } from 'react';
import { Filter } from '../Filter/Filter';
import { UsersList } from '../UsersList/UsersList';
import { AppContext } from '../App/App';
import './Users.css';

export function Users() {
  let { state, dispatch, genderAC } = useContext(AppContext);

  return (
    <section className="users">
      <Filter selectedGender={state.selectedGender} dispatch={dispatch} genderAC={genderAC} />
      <UsersList selectedGender={state.selectedGender} />
    </section>
  );
}
