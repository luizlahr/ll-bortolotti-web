import { Tag } from 'antd';
import { Actions, Table } from 'components/display/table';
import { Span } from 'components/layout/span';
import { Page } from 'components/layout/page';
import { SearchFunction } from 'components/layout/page/_partials/searchBar';
import { ContactEntity } from 'entities/contactEntity';
import React, { useEffect, useState } from 'react';
import { Briefcase, User } from 'react-feather';
import { Search } from 'services/common/search';
import { deleteContact, getAllContacts, searchFields } from 'services/contacts/contactService';
import { handler } from 'utils/handler';

const People: React.FC = () => {
  const [tableData, setTableData] = useState<ContactEntity[]>();
  const {data, error, mutate} = getAllContacts();

  const handleSearch: SearchFunction = (term?: string) => {
    Search(data, term, searchFields, setTableData);
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
      width: '60px',
      dataIndex: 'id',
    },
    {
      key: 'business',
      title: '',
      width: '40px',
      render: (column: string, record: ContactEntity, index:number) => {
        return record.business ? <Briefcase /> : <User />
      }
    },
    {
      key: 'name',
      title: 'Nome',
      render: (column: string, record: ContactEntity, index:number) => {
        return (
        <Span dir="vertical">
          <span>{record.name}</span>
          <small>{record.nickname}</small>
        </Span>
        )
      }
    },
    {
      key: 'whatsapp',
      title: '',
      width: '40px',
      // render: (column: string, record: ContactEntity, index:number) => {
      //   // return record.whatsapp && <WhatsAppLink size="20px" mobile={`+${record.mobilePrefix}${record.mobile}`} />;
      // }
    },
    {
      key: 'contact',
      title: 'Contato',
      render: (column: string, record: ContactEntity, index:number) => {
        return (
        <Span dir="vertical">
          <span>{record.mobile}</span>
          <span>{record.email}</span>
          <span>{record.phone}</span>
        </Span>
        )
      }
    },
    {
      key: 'address',
      title: 'Endereço',
      render: (column: string, record: ContactEntity, index:number) => {
        return (
        <Span dir="vertical">
          <span>
            {record.streetName}
            {record.streetName && record.streetNumber && ', '}
            {record.streetNumber}
          </span>
          <span>
            {record.neighborhood}
            {record.neighborhood && record.city && ', '}
            {record.city}
            {record.city && record.state && ' - '}
            {record.state}
          </span>
        </Span>
        )
      }
    },
     {
      key: 'type',
      title: 'Tipo',
      render: (column: string, record: ContactEntity, index:number) => {
        return (
        <Span dir="horizontal">
          {record.tags.map(tag => (
            <Tag key={tag} color={tag === 'cliente' ? 'geekblue' : 'purple'}>{tag}</Tag>
          ))}
        </Span>
        )
      }
    },
    {
      key: 'actions',
      title: '',
      width: '112px',
      render: (column: string, record: ContactEntity, index:number) => {
        return (
          <Actions
            onDelete={()=>handleDelete(record.id)}
            editLink={`/contacts/${record.id}`}
          />
        )
      }
    },
  ];

  return(
    <Page title="Contatos" newUrl="/contacts/new" onSearch={handleSearch} >
      <Table rowKey="id" dataSource={tableData} columns={columns} />
    </Page>
  );
}

export default People