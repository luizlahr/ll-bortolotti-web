import styled, { css } from 'styled-components';
import { TagProps } from 'antd/es/tag'
import { darken } from 'polished';

interface StatusProps extends TagProps {
  status: number
}

const statusColor = {
  2: css`
    color: ${props => darken(0.2, props.theme.colors.primary)};
    border-color: ${props => darken(0.2, props.theme.colors.primary)};
  `,
  3: css`
    color: ${props => props.theme.colors.warning};
    border-color: ${props => props.theme.colors.warning};
  `,
  4: css`
    color: ${props => props.theme.colors.success};
    border-color: ${props => props.theme.colors.success};
  `,
  5: css`
    color: ${props => props.theme.colors.danger};
    border-color: ${props => props.theme.colors.danger};
  `,
  6: css`
    color: ${props => props.theme.colors.danger};
    border-color: ${props => props.theme.colors.danger};
  `,
  7: css`
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.text.medium};
    border-color: ${props => props.theme.colors.text.medium};
  `,
}

export const Container = styled.span<StatusProps>`
  position: relative;
  display: flex;
  max-width: max-content;
  
  margin: 0;
  padding: 0 8px;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.terciary};

  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text.medium};

  ${props => statusColor[props.status]};
  font-size: 15px;
  line-height: 1.2
`;
