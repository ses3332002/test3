import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '../App/App';
import { Select } from 'antd';

const { Option } = Select;

export function Filter() {
  let { genderAC } = useContext(AppContext);
  let dispatch = useDispatch();
  let selectedGender = useSelector(state => state.selectedGender);

  function handleChange(value) {
    dispatch(genderAC(value));
  }

  return (
    <Select style={{ width: 120, margin: 20 }} value={selectedGender} onChange={handleChange}>
      <Option value="all">all</Option>
      <Option value="male">male</Option>
      <Option value="female">female</Option>
    </Select>
  );
}
