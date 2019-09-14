// const breakpoints = [
//   '480px',
//   '736px',
//   '980px',
//   '1280px',
//   '1690px',
// ]

// breakpoints.xs = breakpoints[0]
// breakpoints.s = breakpoints[1]
// breakpoints.m = breakpoints[2]
// breakpoints.l = breakpoints[3]
// breakpoints.xl = breakpoints[4]

export default {
  name: 'default',
  // breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [8, 13, 21, 34, 55],
  colors: {
    primary: {
      dark: '#27784E',
      main: '#4CE897',
      light: '#DEFFEE',
    },
    secondary: {
      dark: '#162D3D',
      main: '#316388',
      light: '#5F6E79',
    },
    grey: {
      dark: 'hsl(0,0%,20%)',
      main: 'hsl(0,0%,40%)',
      light: 'hsl(0,0%,90%)',
    },
  },
}
