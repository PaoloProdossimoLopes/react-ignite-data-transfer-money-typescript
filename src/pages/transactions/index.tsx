import { useContext } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionContext'
import { priceFormatter } from '../../utils/formatter'
import {
  LoaderContainer,
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './style'

export function Transactions() {
  const { transactions, isFetching } = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        {isFetching ? (
          <LoaderContainer>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#00875F"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          </LoaderContainer>
        ) : (
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
        )}

        {/* {isFetching && (
          <LoaderContainer>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#00875F"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          </LoaderContainer>
        )} */}

        {/* <TransactionTable>
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
        </TransactionTable> */}
      </TransactionContainer>
    </div>
  )
}
