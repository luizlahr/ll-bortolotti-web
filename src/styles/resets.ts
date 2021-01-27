import { css } from 'styled-components'
import { theme } from './theme';

export const AntInputReset = css`
  .ant-input {
    border: 0;
    background-color: transparent;

    &[disabled] {
      background-color: transparent;
    }
  }

  .ant-input:focus, .ant-input-focused {
    box-shadow: none;
  }
`;

export const AntSelectReset = css`
  .ant-select {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;

    &.ant-select-disabled {
      .ant-select-selector {
        background-color: transparent;
      }
    }

    .ant-select-selector {
      position: relative;
      display: flex;
      align-items: center;

      width: 100%;
      height: 100%;

      box-shadow: none !important;

      border: 0;
      background-color: transparent;

      .ant-select-selection-search {
        input {
          height: 100%;
        }
      }

      .ant-select-selection-item {
        display: flex;
        align-items: center;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .ant-select-selection-overflow-item {
        display: flex;
        max-height: 100%;

        +.ant-select-selection-overflow-item {
          margin-left: 2px;
        }

        .ant-select-selection-item {
          display: flex;
          max-height: 100%;
          margin: 0px;
          background-color: ${props => props.theme.colors.secondary};
        }
      }
    }
  }

  .ant-select:focus, .ant-input-focused {
    box-shadow: none;
  }
`;