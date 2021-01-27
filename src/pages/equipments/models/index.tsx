import { Actions, Table } from 'components/display/table';
import { Page } from 'components/layout/page';
import { SearchFunction } from 'components/layout/page/_partials/searchBar';
import { ModelEntity } from 'entities/modelEntity';
import React, { useEffect, useState } from 'react';
import { deleteModel, getAllModels, searchFields } from 'services/equipments/modelService';
import { Search } from 'services/common/search';
import { handler } from 'utils/handler';
import { CategoryEntity } from 'entities/categoryEntity';
import { BrandEntity } from 'entities/brandEntity';

const People: React.FC = () => {
  const [tableData, setTableData] = useState<ModelEntity[]>();
  const {data, error, mutate} = getAllModels();

  const handleSearch: SearchFunction = (term?: string) => {
    Search(data, term, searchFields, setTableData);
  }

  const handleDelete = async (id: number) => {
    const callback = (key: string) => {
      mutate(key)
    }
    await deleteModel(id, callback);
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
      key: 'category',
      title: 'Categoria',
      dataIndex: 'category',
      render: (field: CategoryEntity) => {
        return field.name
      }
    },
    {
      key: 'brand',
      title: 'Marca',
      dataIndex: 'brand',
      render: (field: BrandEntity) => {
        return field.name
      }
    },
    {
      key: 'actions',
      title: '',
      width: '112px',
      render: (column: string, record: ModelEntity, index:number) => {
        return (
          <Actions
            onDelete={()=>handleDelete(record.id)}
            editLink={`/equipments/models/${record.id}`}
          />
        )
      }
    },
  ];

  return(
    <Page title="Modelos" newUrl="/equipments/models/new" onSearch={handleSearch} >
      <Table rowKey="id" dataSource={tableData} columns={columns} />
    </Page>
  );
}

export default People