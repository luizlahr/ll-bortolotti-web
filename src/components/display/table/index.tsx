import {Table as AntTable, Popconfirm, Dropdown} from 'antd'
import {TableProps as Props} from 'antd/es/table'
import { Button } from 'components/general/button';
import Link from 'next/link';
import { Edit2, HelpCircle, MoreVertical, Trash2 } from 'react-feather';

import {TableStyles, ActionContainer, ActionsDropdown} from './styles';

interface TableProps extends Props<any> {}

export const Table: React.FC<TableProps> = ({...props}) => {
  return(
    <>
    <AntTable {...props} />
    <TableStyles />
    </>
  );
};


interface ActionProps {
  onDelete?: () => void;
  onEdit?: () => void;
  editLink?: string;
  children?: React.ReactNode
}

export function Actions({children, onDelete, onEdit, editLink}: ActionProps) {

  const defaultOptions = (
  <ActionsDropdown>
    {onEdit || editLink && (
      <li>
        <Link href={editLink}>
          <a  className="btn-edit">
            Editar
          </a>
        </Link>
      </li>
    )}
    {children}
    {onDelete && (
    <li>
      <Popconfirm
        title="Confirma a remoção do registro?"
        icon={<HelpCircle />}
        onConfirm={onDelete}
        okText="Confirmar"
        cancelText="Não"
      >
        <a onClick={(e)=>{e.stopPropagation()}} className="btn-remove">
          Remover
        </a>
      </Popconfirm>
    </li>
    )}
  </ActionsDropdown>
)

  return (
    <Dropdown overlay={defaultOptions} trigger={['click']} placement='bottomRight'>
        <ActionContainer>
        <MoreVertical/>
      </ActionContainer>
    </Dropdown>
  );
}

export const Actions2: React.FC<ActionProps> = ({onDelete, onEdit, editLink}) => (
  <ActionContainer>
    {(onEdit || editLink) && 
      <Button 
        type="link"
        color="primary"
        href={editLink}
        onClick={onEdit}
        ariaLabel="Editar registro"
      >
        <Edit2/>
      </Button>
    }
    {onDelete && (
      <Popconfirm
        title="Confirma a remoção do registro?"
        icon={<HelpCircle />}
        onConfirm={onDelete}
        okText="Confirmar"
        cancelText="Não"
      >
        <Button ariaLabel="Remover registro" color="danger" type="link"><Trash2 /></Button>
      </Popconfirm>
    )}
  </ActionContainer>
)
