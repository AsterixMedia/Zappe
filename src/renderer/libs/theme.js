import { createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import { green, red } from 'material-ui/colors'

export const theme = createMuiTheme({
  palette: createPalette({
    primary: green,
    accent: red,
    type: 'light'
  })
})
