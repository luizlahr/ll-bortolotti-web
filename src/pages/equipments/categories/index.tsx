import { Actions, Table } from 'components/display/table';
import { Page } from 'components/layout/page';
import { SearchFunction } from 'components/layout/page/_partials/searchBar';
import { CategoryEntity } from 'entities/categoryEntity';
import React, { useEffect, useState } from 'react';
import { deleteCategory, getAllCategories, searchFields } from 'services/equipments//categoryService';
import { Search } from 'services/common/search';
import { handler } from 'utils/handler';

const People: React.FC = () => {
  const [tableData, setTableData] = useState<CategoryEntity[]>();
  const {data, error, mutate} = getAllCategories();

  const handleSearch: SearchFunction = (term?: string) => {
    Search(data, term, searchFields, setTableData);
  }

  const handleDelete = async (id: number) => {
    const callback = (key: string) => {
      mutate(key)
    }
    await deleteCategory(id, callback);
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
      render: (column: string, record: CategoryEntity, index:number) => {
        return (
          <Actions
            onDelete={()=>handleDelete(record.id)}
            editLink={`/equipments/categories/${record.id}`}
          />
        )
      }
    },
  ];

  return(
    <Page title="Categorias" newUrl="/equipments/categories/new" onSearch={handleSearch} >
      <Table rowKey="id" dataSource={tableData} columns={columns} />
    </Page>
  );
}

export default People