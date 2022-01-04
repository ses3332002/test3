import { Select } from 'antd';

const { Option } = Select;

export function Filter({ selectedGender, dispatch, genderAC }) {
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
