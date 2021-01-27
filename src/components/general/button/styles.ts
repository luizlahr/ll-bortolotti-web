import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { darken } from 'polished'

interface ContainerProps extends ThemeProps<DefaultTheme> {
  full: boolean;
  squared: boolean;
  link: boolean;
  color: 'secondary' | 'primary' | 'terciary' | 'success' | 'danger' | 'warning';
}

const fullProperty = css`
  width: 100%;
  max-width: 100%;
`;

const basicProperties = css`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;

  font-family: ${props => props.theme.buttons.font.family};
  font-weight: ${props => props.theme.buttons.font.weight};
  font-size: ${props => props.theme.buttons.font.size};
  
  width: max-content;
  height: ${props => props.theme.buttons.height.regular};

  padding: 0 ${props => props.theme.spacing[2]};

  cursor: pointer;
  transition: all 0.3s ease;

  border: 0;
  border-radius: ${(props: ContainerProps) => props.squared ? 0 : props.theme.border.radius.large};
`;

const buttonColors = {
  primary: css`
    color: ${props => props.theme.colors.light};
    background-color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    &:hover, &:active, &:focus {
      background-color: ${(props: ContainerProps) => darken(0.1, props.theme.colors[props.color])};
      color: ${props => props.theme.colors.light};
    }
  `,
  secondary: css`
    color: ${props => props.theme.colors.text.dark};
    background-color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    &:hover, &:active, &:focus {
      background-color: ${(props: ContainerProps) => darken(0.1, props.theme.colors[props.color])};
      color: ${props => props.theme.colors.text.dark};
    }
  `,
  terciary: css`
    color: ${props => props.theme.colors.text.dark};
    background-color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    &:hover, &:active, &:focus {
      background-color: ${(props: ContainerProps) => darken(0.1, props.theme.colors[props.color])};
      color: ${props => props.theme.colors.text.dark};
    }
  `,
  success: css`
    color: ${props => props.theme.colors.light};
    background-color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    &:hover, &:active, &:focus {
      background-color: ${(props: ContainerProps) => darken(0.1, props.theme.colors[props.color])};
      color: ${props => props.theme.colors.light};
    }
  `,
  warning: css`
    color: ${props => props.theme.colors.light};
    background-color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    &:hover, &:active, &:focus {
      background-color: ${(props: ContainerProps) => darken(0.1, props.theme.colors[props.color])};
      color: ${props => props.theme.colors.light};
    }
  `,
  danger: css`
    color: ${props => props.theme.colors.light};
    background-color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    &:hover, &:active, &:focus {
      background-color: ${(props: ContainerProps) => darken(0.1, props.theme.colors[props.color])};
      color: ${props => props.theme.colors.light};
    }
  `,
}

const linkColors = {
  primary: css`
    background-color: transparent;
    color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    &:hover{
      background-color: ${props => props.theme.colors.secondary};
      color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${(props: ContainerProps) => props.theme.colors.text.medium};
    &:hover{
      background-color: ${props => props.theme.colors.secondary};
      color: ${(props: ContainerProps) => props.theme.colors.text.medium};
    }
  `,
  terciary: css`
    background-color: transparent;
    color: ${(props: ContainerProps) => props.theme.colors.text.dark};
    &:hover{
      background-color: ${props => props.theme.colors.secondary};
      color: ${(props: ContainerProps) => props.theme.colors.text.dark};
    }
  `,
  success: css`
    background-color: transparent;
    color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    &:hover{
      background-color: ${props => props.theme.colors.secondary};
      color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    }
  `,
  warning: css`
    background-color: transparent;
    color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    &:hover{
      background-color: ${props => props.theme.colors.secondary};
      color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    }
  `,
  danger: css`
    background-color: transparent;
    color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    &:hover{
      background-color: ${props => props.theme.colors.secondary};
      color: ${(props: ContainerProps) => props.theme.colors[props.color]};
    }
  `,
}

export const ButtonContainer = styled.button<ContainerProps>`
  ${basicProperties};
  ${props => props.link ? linkColors[props.color] : buttonColors[props.color]};

  ${props => props.full && fullProperty};
  `;

export const LinkContainer = styled.a<ContainerProps>`
  ${basicProperties};
  ${props => props.link ? linkColors[props.color] : buttonColors[props.color]};

  ${props => props.full && fullProperty};
`;
