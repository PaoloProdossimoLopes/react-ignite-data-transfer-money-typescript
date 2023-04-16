import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

import * as Dialog from "@radix-ui/react-dialog";
import igniteLogoImage from '../../assets/logo-ignite.svg';
import { NewTransaction } from "../../pages/NewTransaction";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={igniteLogoImage} alt="" />
        <Dialog.Root>
          <NewTransaction />

          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
