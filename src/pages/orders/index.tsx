import { Actions, Table } from 'components/display/table';
import { Span } from 'components/layout/span';
import { Page } from 'components/layout/page';
import { SearchFunction } from 'components/layout/page/_partials/searchBar';
import { Tag } from 'components/display/tag';
import { ContactEntity } from 'entities/contactEntity';
import { OrderEntity } from 'entities/orderEntity';
import React, { useEffect, useState } from 'react';
import { Search } from 'services/common/search';
import { deleteContact } from 'services/contacts/contactService';
import { getAllOrders, searchFields } from 'services/orders/orderService';
import { formatDate, formatMoney } from 'utils/format';
import { handler } from 'utils/handler';

const Order: React.FC = () => {
  const [tableData, setTableData] = useState<OrderEntity[]>();
  const {data, error, mutate} = getAllOrders();

  const handleSearch: SearchFunction = (term?: string) => {
    const formatedData = data?.map((item: OrderEntity) => {
      return {
        ...item, 
        createdAt: formatDate(item.createdAt),
        expiresAt: formatDate(item.expiresAt),
        value: formatMoney(item.value)
      }
    })
    Search(formatedData, term, searchFields, setTableData);
  }

  const handleDelete = async (id: number) => {
    const callback = (key: string) => {
      mutate(key)
    }
    await deleteContact(id, callback);
  }

  useEffect(() =>{
    handleSearch();
  },[data])

  useEffect(() =>{
    if (error) handler(error)
  },[error])

  const columns = [
  { 
      key: 'id',
      title: '#',
      width: 'max-content',
      dataIndex: 'id',
    },
    {
      key: 'contact',
      title: 'Cliente',
      dataIndex: 'contact',
      render: (contact: ContactEntity) => {
        return (
          <Span>
            <span>{contact?.name}</span>
            <span><small>{contact?.email && contact?.mobile && contact?.phone}</small></span>
          </Span>
          )
      }
    },
    {
      key: 'createdAt',
      title: 'Data Entrada',
      dataIndex: 'createdAt',
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      render: (status: {id: number, status: string}) => {
        return <Tag status={status?.id}>{status?.status}</Tag>
      }
    },
    {
      key: 'expiresAt',
      title: 'Vencimento',
      dataIndex: 'expiresAt',
    },
    {
      key: 'value',
      title: 'Valor Total',
      dataIndex: 'value',
    },
    {
      key: 'actions',
      title: '',
      width: 'max-content',
      dataIndex: 'id',
      render: (id: number) => {
        return (
          <Actions
            onDelete={()=>handleDelete(id)}
            editLink={`/orders/${id}`}
          />
        )
      }
    },
  ];

  return(
    <Page title="Ordens de Serviço" newUrl="/orders/new" onSearch={handleSearch} >
      <Table rowKey="id" dataSource={tableData} columns={columns} />
    </Page>
  );
}

export default Order