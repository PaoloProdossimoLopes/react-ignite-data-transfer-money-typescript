import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./style";

interface Transaction {
  id: number
  description: string,
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transactions() {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/transaction')
      .then(resposne => resposne.json())
      .then(json => setTransactions(json))
  }, [])

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
                <td width='50%'>{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                  {transaction.price}
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