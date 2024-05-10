import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../../../styles'

export const BotaoContainer = styled.button`
  width: 304px;
  height: 24px;
  background-color: ${cores.creme};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 8px;
`
export const BotaoLink = styled(Link)`
  width: 304px;
  height: 24px;
  background-color: ${cores.creme};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 8px;
`
