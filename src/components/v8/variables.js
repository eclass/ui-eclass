/**
 * @typedef {Object} Vars
 * @property {Object} setColors - Cambiar color.
 */
export default {
  // // Border
  borderRadius: '10px',
  /**
   * Colores.
   */
  setColors: {
    primary: '#0189ff',
    info: '#e0eefa',
    default: '#c9c9d3',
    success: '#e9f6ec',
    warning: '#fdeed6',
    danger: '#f9dfdf',
    active: '#adadbd',
    text: '#9a9aa4',
    icons: '#b0cfe0',
    completed: '#60798e',
    buttons: {
      success: '#2cb26b'
    },
    /**
 * Transforma un hexadecimal a
```css
rgba(255,255,255,0.3)
```.
 *
 * @example
 * @param hex
 * @param opacity
 */
    hexToRgbA: (hex, opacity) => hexToRgbA(hex, opacity),

    black: '#2f2f2f',
    brownishGrey: '#5c5c5c',
    blackTwo: '#333333',
    blackThree: '#2f2f2f',
    brownGrey: '#797979',
    brownThree: '#808080',
    veryLightPink: '#c6c6c6',
    brownGreyTwo: '#999999',
    veryLightPinkTwo: '#e8e8e8',
    veryLightPinkThree: '#f9dfdf',
    deepSeaBlue: '#005580',
    deepSkyBlue: '#0189ff',
    backgroundGrey: '#e6e6e6',
    white: '#f4f4f4',
    whiteTwo: '#f8f8f8',
    whiteThree: '#ffffff',
    whiteFour: '#e8e8e8',
    red: '#cc0000',
    jadeGreen: '#28a745',
    orangeyYellow: '#f5a623',
    veryLightBlue: '#e0eefa',
    ice: '#e9f6ec',
    activeBlue: '#2488F7',
    inactiveBlue: '#B0CFE0',
    checkGreen: '#28A745',
    checkError: '#C00',
    lightMint: '#c3e7cb',
    paleSalmon: '#f0b5b5'
  },
  inputOptionFontSize: '1rem',
  inputOptionFontSizeSm: '0.7143rem',
  inputOptionSize: '1.7143rem',
  inputOptionSizeSm: '1.2143rem',
  fontSize: 16,
  fontSizeMobile: 14,
  hSize: {
    normal: {
      h1: 40,
      h2: 36,
      h3: 32,
      h4: 28,
      h5: 24,
      h6: 20
    },
    mobile: {
      h1: 36,
      h2: 32,
      h3: 28,
      h4: 24,
      h5: 20,
      h6: 18
    }
  },
  pSize: {
    big: 18,
    medium: 16,
    small: 14,
    tiny: 12
  },
  articleH: {
    normal: {
      // h1: 0,
      h2: 36,
      h3: 36,
      h4: 32,
      h5: 26,
      h6: 20
    },
    mobile: {
      // h1: 0,
      h2: 28,
      h3: 28,
      h4: 26,
      h5: 23
      // h6: 0,
    }
  },
  alertFontSize: {
    big: 24,
    tiny: 14
  }
}

/**
 * Pasa un color hexadecimal a rgba().
 *
 * @param {string} hex - Color en hexadecimal.
 * @param {number} opacity - Opacidad.
 * @example
 * ```js
 *   const color = hexToRgbA('FFAACC', 0,2)
 * ```
 * @returns {string} Color en `rgba(255, 0, 0, 0.2)`.
 */
const hexToRgbA = (hex, opacity) => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      opacity +
      ')'
    )
  }
}
