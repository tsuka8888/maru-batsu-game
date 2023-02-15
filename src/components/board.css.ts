import { style } from "@vanilla-extract/css"

const container = style({
  display: 'grid',
  gridTemplateRows: '100px 100px 100px',
  gridTemplateColumns: '100px 100px 100px',
})

const item = style({
  border: '1px solid #000000',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 50,
})

export const boardStyles = {
  container,
  item,
}