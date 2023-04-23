import { useContext } from "react"
import { TransactionContext } from "../contexts/TransactionContext"

export function useSummary() {
  const { transactions } = useContext(TransactionContext)
  const sumary = transactions.reduce(
    (accumulator, transaction) => { 
      const price = transaction.price

      if (transaction.type === 'income') {
        accumulator.income += price
        accumulator.total += price
      } else {
        accumulator.outcome += price
        accumulator.total -= price
      }

      return accumulator 
    }, 
    { income: 0, outcome: 0, total: 0 }
  )

  return sumary
}