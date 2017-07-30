import { createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import { pink, indigo } from 'material-ui/colors'

export const theme = createMuiTheme({
  palette: createPalette({
    primary: indigo,
    accent: pink,
    type: 'light'
  })
})
