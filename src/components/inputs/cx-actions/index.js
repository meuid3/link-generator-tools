import styled from "styled-components"
import CopyIcon from "../../../images/icons/link-de-copia.png"
import RedirectIcon from "../../../images/icons/sair-do-canto-superior-direito.png"

const Img = styled.img`
  width: 22px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`

const Link = styled.a`
  text-decoration: none;
`

const Copy = ({onClick}) =>  {
  return (
      <Img src={CopyIcon} onClick={onClick}/>
  )
}

const Redirect = ({url}) =>  {
  return (
    <Link href={url} target="_blank">
      <Img src={RedirectIcon}/>
    </Link>
  )
}

export const CxAction = {
  Copy: Copy,
  Redirect: Redirect
}

