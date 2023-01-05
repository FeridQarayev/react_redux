import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./style.css"

function Customers() {
  const [customers, setCustomers] = useState([])
  
  useEffect(()=>{
    axios.get('https://northwind.vercel.app/api/customers').then((res)=>{setCustomers(res.data)})
  },[])
  let navigate = useNavigate();
  // function goCountry() {
  //   navigate(`/detail/${data.name.common}`);
  // }
  // console.log(customers[0]?.address?.street)
  


  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '20%',
      sorter: (a, b) => a.id.localeCompare(b.id),
      ...getColumnSearchProps('id'),
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
      width: '30%',
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
      ...getColumnSearchProps('companyName'),
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
      key: 'contactName',
      width: '30%',
      ...getColumnSearchProps('contactName'),
      sorter: (a, b) => a.contactName.localeCompare(b.contactName),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Detail',
      key: 'detail',
      width: '20%',
      render:(_,record)=>(
        <Link className='detailBtn' to={`/detail/${record.id}`}>
          <button>Detail</button>
        </Link>
      )
    },
    {
      title: 'Add to favourite',
      key: 'favous',
      width: '20%',
      render:(_,record)=>(
          <button className='favousBtn' onClick={()=>navigate(`/detail/${JSON.stringify(record)}`)}>Favourite</button>
      )
    }
  ];
  return (
    <div className='body'>
      <Table rowKey={recorder=>recorder.id} columns={columns} dataSource={customers} />
    </div>
  );
}

export default Customers