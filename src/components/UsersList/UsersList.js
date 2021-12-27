import { useState, useEffect, useContext } from 'react';
import { Pagination, Table, Spin } from 'antd';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../App/App';
import { getUsers } from '../../data/usersAPI';

export default function UsersList({ selectedGender }) {
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

  let [paginationInfo, setPaginationInfo] = useState({});
  let [users, setUsers] = useState([]);
  let [page, setPage] = useState(1);
  let [isEditing, setIsEditing] = useState(false);
  let { setCurUser } = useContext(AppContext);

  function onPageChange(currentPage) {
    setPage(currentPage);
  }

  useEffect(() => {
    getUsers(selectedGender, page).then(({ data }) => {
      setPaginationInfo(data.meta.pagination);
      setUsers(data.data);
    });
  }, [selectedGender, page]);

  if (isEditing) {
    return <Navigate replace to="/edit" />;
  }

  if (users.length === 0) {
    return <Spin />;
  } else {
    return (
      <>
        <Table
          onRow={record => {
            return {
              onClick: event => {
                setCurUser(record);
                setIsEditing(true);
              },
            };
          }}
          style={{ width: '90vw', cursor: 'pointer' }}
          columns={columns}
          size="middle"
          dataSource={users}
          pagination={false}
          rowKey={record => record.id + ''}
          scroll={{ y: '75vh' }}
        />

        <Pagination
          style={{ margin: 10 }}
          onChange={onPageChange}
          total={paginationInfo.total}
          showTotal={total => `Total ${total} items`}
          pageSize={pageSize}
          defaultCurrent={page}
          showSizeChanger={false}
        />
      </>
    );
  }
}
