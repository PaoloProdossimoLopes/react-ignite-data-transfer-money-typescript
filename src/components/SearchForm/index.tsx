import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { SearchFormContainer } from "./style";

const searchFormSchema = z.object({
  query: z.string()
})

type SeachFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { 
    register, 
    handleSubmit,
    formState: { isSubmitting } 
  } = useForm<SeachFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchTransaction(data: SeachFormInputs) {
    
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input type="text" placeholder='Busque por transações' {...register('query')}/>
      <button type='submit' disabled={isSubmitting}>
        <MagnifyingGlass size={32}/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}