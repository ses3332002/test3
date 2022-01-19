import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Table, Spin } from 'antd';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../App/App';

export function UsersList() {
  const pageSize = 20;
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 60,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      width: 70,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 70,
    },
  ];

  let dispatch = useDispatch();
  let state = useSelector(state => state);
  let [isEditing, setIsEditing] = useState(false);
  let { userAC, pageAC, getUsersAC } = useContext(AppContext);

  function onPageChange(currentPage) {
    dispatch(pageAC(currentPage));
  }

  useEffect(() => {
    dispatch(getUsersAC(state.selectedGender, state.page));
  }, [state.selectedGender, state.page]);

  if (isEditing) {
    return <Navigate replace to="/edit" />;
  }

  if (state.users.length === 0) {
    return <Spin />;
  } else {
    return (
      <>
        <Table
          onRow={record => {
            return {
              onClick: event => {
                dispatch(userAC(record));
                setIsEditing(true);
              },
            };
          }}
          style={{ width: '90vw', cursor: 'pointer' }}
          columns={columns}
          size="middle"
          dataSource={state.users}
          pagination={false}
          rowKey={record => record.id + ''}
          scroll={{ y: '75vh' }}
        />

        <Pagination
          style={{ margin: 10 }}
          onChange={onPageChange}
          total={state.paginationInfo.total}
          showTotal={total => `Total ${total} items`}
          pageSize={pageSize}
          defaultCurrent={state.page}
          showSizeChanger={false}
        />
      </>
    );
  }
}
