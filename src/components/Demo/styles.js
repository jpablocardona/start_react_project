import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
    &:before {
      ${fadeIn({ time: '0.5s' })};
      content: 'link cargado por estilos';
      position: relative;
      bottom: 0;
      padding: 20px 0;
      font-size: 34px;
      line-height: 20px;
    }
`

export const Image = styled.img`
  /* border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px; */
`
