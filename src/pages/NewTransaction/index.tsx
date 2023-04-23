import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { CloseButton, Content, NewTransactionContainer, Overlay, TransactionType, TransactionTypeButton } from "./style";

import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from '@radix-ui/react-dialog';
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionSchema>

export function NewTransaction() {
  const { createTransaction } = useContext(TransactionContext)
  const { control, register, handleSubmit, formState: {isSubmitting}, reset } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: "income"
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data
    await createTransaction({ description, price, category, type, timestamp: (new Date()).toISOString() })
    reset()
  }

  return (
    <NewTransactionContainer>
      <Dialog.Portal>
         <Overlay />
         
         <Content>
            <CloseButton>
              <X size={24} />
            </CloseButton>
            <Dialog.Title>Nova transação</Dialog.Title>
            <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
              <input {...register('description')} type="text" placeholder="Descrição" required/>
              <input {...register('price', { valueAsNumber: true })} type="number" placeholder="Preço" required/>
              <input {...register('category')} type="text" placeholder="Categoria" required/>

              <Controller control={control} name="type" render={(props) => {
                return (
                  <TransactionType onValueChange={props.field.onChange} value={props.field.value}>
                    <TransactionTypeButton variant="income" value="income" >
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton variant="outcome" value="outcome" >
                      <ArrowCircleDown size={24} />
                      Saida
                    </TransactionTypeButton>
                  </TransactionType>
                )
              }}/>

              <button type="submit" disabled={isSubmitting}>Cadastrar</button>
            </form>
            
          </Content>
      </Dialog.Portal>
    </NewTransactionContainer>
  )
}