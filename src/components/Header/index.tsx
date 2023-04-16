import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

import igniteLogoImage from '../../assets/logo-ignite.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={igniteLogoImage} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
