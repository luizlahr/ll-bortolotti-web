import { transparentize } from 'polished'

const defaultSpacing = 8;

const spacing = {
  1: `${defaultSpacing}px`,
  2: `${2 * defaultSpacing}px`,
  3: `${3 * defaultSpacing}px`,
  4: `${4 * defaultSpacing}px`,
  5: `${5 * defaultSpacing}px`,
}
const general = {
  background: {
    color: '#fff',
  }
}
const colors = {
  primary: '#279AF1',
  secondary: '#EDEDEF',
  terciary: '#CDCDCF',
  success: '#04A777',
  warning: '#FF7F11',
  danger: '#FF206E',
  light: '#FFFFFF',
  dark: '#242432',

  text: {
    light: '#A7A7BA',
    medium: '#6A6A7F',
    dark: '#2D2D3F',
  }
}
const type = {
  text: {
    family: "'Open Sans', arial, sans-serif",
    size: '15px',
  },
  heading: {
    h1: {
      family: 'Ubuntu, arial, sans-serif',
      size: '40px',
      lineHeight: 1.6,
      margin: 0,
    },
    h2: {
      family: 'Ubuntu, arial, sans-serif',
      size: '36px',
      lineHeight: 1.6,
      margin: 0,
    },
    h3: {
      family: 'Ubuntu, arial, sans-serif',
      size: '32px',
      lineHeight: 1.6,
      margin: 0,
    },
    h4: {
      family: 'Roboto, arial, sans-serif',
      size: '28px',
      lineHeight: 1.5,
      margin: 0,
    },
    h5: {
      family: 'Roboto, arial, sans-serif',
      size: '24px',
      lineHeight: 1.5,
      margin: 0,
    },
    h6: {
      family: 'Roboto, arial, sans-serif',
      size: '20px',
      lineHeight: 1.5,
      margin: 0,
    }
  }
}
const border = {
  radius: {
    small: '8px',
    medium: '12px',
    large: '16px'
  }
}
const index = {
  page: 100,

  header: 110,
  content: 100,

  sidebar: 200,
  sidebarOverlay: 190,

  loader: 510,
  modal: 500,
}
const forms = {
  labels: {
    fontFamily: 'Roboto, arial, sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
    color: colors.text.dark,
    marginBottom: spacing[1],
  },
  inputs: {
    height: '40px',
    border: {
      color: colors.terciary,
      style: 'solid',
      size: '1px',
    },
    highlight: {
      boxShadow: `box-shadow: 0 0 0 2px ${transparentize(0.8, colors.primary)}`,
      border: {
        color: colors.primary,
      }
    },
    radio: {
      label: {
        fontFamily: type.text.family,
        fontSize: type.text.size,
        fontWeight: 'normal',
        colort: colors.text.dark
      }
    }
  },
  errors: {
    fontFamily: 'Roboto, arial, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    color: colors.danger,
    marginTop: spacing[1],

    input: {
      border: `1px solid ${colors.danger}`,
      color: colors.danger
    },
  }
}
const buttons = {
  height: {
    small: '32px',
    regular: '40px',
    large: '48px'
  },
  font: {
    family: 'Roboto, arial, sans-serif',
    size: '16px',
    weight: 400
  }
}

export const theme = {
  general,
  colors,
  type,
  border,
  index,
  forms,
  spacing,
  buttons
}
