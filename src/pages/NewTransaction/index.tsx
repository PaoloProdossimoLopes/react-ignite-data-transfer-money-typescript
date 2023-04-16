import { X } from "phosphor-react";
import { CloseButton, Content, NewTransactionContainer, Overlay } from "./style";

import * as Dialog from '@radix-ui/react-dialog';

export function NewTransaction() {
  return (
    <NewTransactionContainer>
      <Dialog.Portal>
         <Overlay />
         
         <Content>
            <CloseButton>
              <X size={24} />
            </CloseButton>
            <Dialog.Title>Nova transação</Dialog.Title>
            <form>
              <input type="text" placeholder="Descrição" required/>
              <input type="number" placeholder="Preço" required/>
              <input type="text" placeholder="Categoria" required/>

              <button type="submit">Cadastrar</button>
            </form>
            
          </Content>
      </Dialog.Portal>
    </NewTransactionContainer>
  )
}