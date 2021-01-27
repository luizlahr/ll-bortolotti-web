import { darken, lighten } from 'polished';
import styled, { createGlobalStyle } from 'styled-components';

export const TableStyles = createGlobalStyle`

  .ant-table {
    font-size: ${props => props.theme.type.text.size};
    font-family: ${props => props.theme.type.text.family};
  }

  .ant-table-thead .ant-table-cell {
    color: ${props => props.theme.colors.text.dark};
    font-family: ${props => props.theme.type.text.family};
    font-weight: 700;
  }

  .ant-table-cell {
    font-family: ${props => props.theme.type.text.family};
    font-weight: 400;
    color: ${props => props.theme.colors.text.dark};

     small {
      font-size: 15px;
      color: ${props => props.theme.colors.text.light};
    }
  }

  .ant-table-wrapper {
    width: 100%;
  }

  .ant-popconfirm {
    .ant-popover-message {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      svg {
          display: flex;
          width: 20px;
          height: 20px;
          margin-right: 8px;
          color: ${props => props.theme.colors.danger};
      }

      .ant-popover-message-title {
        display: flex;
        padding: 0;
        font-size: 15px;
        color: ${props => props.theme.colors.text.dark};
      }
    }

    .ant-popover-buttons {
      .ant-btn {
        display: inline-flex;
        padding: 0px 12px;

        border-radius: ${props => props.theme.border.radius.medium};
        background-color: ${props => props.theme.colors.secondary};
        border: 0;
        color: ${props => props.theme.colors.text.dark};

        &:hover {
          background-color: ${props => darken(0.07, props.theme.colors.secondary)};
        }

        &.ant-btn-primary {
          background-color: ${props => props.theme.colors.danger};
          color: ${props => props.theme.colors.light};

          &:hover {
            background-color: ${props => darken(0.15, props.theme.colors.danger)};
          }
        }
      }
    }
  }
`;


export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: max-content;
  padding: 0 12px;
  height: 40px;
  border-radius: ${props => props.theme.border.radius.medium};

  cursor: pointer;
  transition: background-color 0.4s;

  &:hover, &.ant-dropdown-open {
    background-color: ${props => props.theme.colors.secondary};
    svg {
      color: ${props => props.theme.colors.danger};
    }
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;


export const ActionsDropdown = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  
  padding: 8px 0;
  border: 1px solid ${props => props.theme.colors.secondary}; 
  background-color: ${props => props.theme.colors.light};

  list-style: none;
  width: max-content;
  min-width: 100px;

  li a { 
    display: flex;
    padding: 4px 24px;

    transition: background-color 0.5s;

    color: ${props => props.theme.colors.text.dark};

    &:hover {
      background-color: ${props => lighten(0.03, props.theme.colors.secondary)};
    }

    &.btn-remove {
      color: ${props => props.theme.colors.danger};
    }

    &.btn-edit {
      color: ${props => props.theme.colors.primary};
    }
  }
`;