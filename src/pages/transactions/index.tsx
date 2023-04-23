import { useContext } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionContext'
import { priceFormatter } from '../../utils/formatter'
import { PriceHighlight, TransactionContainer, TransactionTable } from './style'

export function Transactions() {
  const { transactions } = useContext(TransactionContext)
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>13/04/2022</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
