import { Actions, Table } from 'components/display/table';
import { Page } from 'components/layout/page';
import { SearchFunction } from 'components/layout/page/_partials/searchBar';
import { BrandEntity } from 'entities/brandEntity';
import React, { useEffect, useState } from 'react';
import { deleteBrand, getAllBrands, searchFields } from 'services/equipments//brandService';
import { Search } from 'services/common/search';
import { handler } from 'utils/handler';

const People: React.FC = () => {
  const [tableData, setTableData] = useState<BrandEntity[]>();
  const {data, error, mutate} = getAllBrands();

  const handleSearch: SearchFunction = (term?: string) => {
    Search(data, term, searchFields, setTableData);
  }

  const handleDelete = async (id: number) => {
    const callback = (key: string) => {
      mutate(key)
    }
    await deleteBrand(id, callback);
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
      key: 'name',
      title: 'Nome',
      dataIndex: 'name',
    },
    {
      key: 'actions',
      title: '',
      width: '112px',
      render: (column: string, record: BrandEntity, index:number) => {
        return (
          <Actions
            onDelete={()=>handleDelete(record.id)}
            editLink={`/equipments/brands/${record.id}`}
          />
        )
      }
    },
  ];

  return(
    <Page title="Marcas" newUrl="/equipments/brands/new" onSearch={handleSearch} >
      <Table rowKey="id" dataSource={tableData} columns={columns} />
    </Page>
  );
}

export default People