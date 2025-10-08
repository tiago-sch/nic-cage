import styled, { css } from 'styled-components'
import { breakpoints, containerMaxWidths } from '../styles/constants/breakpoints'

const createContainerWidths = () => {
  let styles = '';

  Object.entries(containerMaxWidths).forEach(([breakpoint, width]) => {
    styles += `
      @media (min-width: ${breakpoints[breakpoint]}px) {
        width: ${width}px;
      }
    `
  })

  return css`${styles}`
}

type ContainerProps = {
  flex?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: ${props => props.flex ? 'flex' : 'block'};
  padding: 0 8px;
  margin: 0 auto;
  width: 100%;

  ${createContainerWidths()}
`

export default Container;
