import { ReactNode, createContext, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string,
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/transaction')
      .then(resposne => resposne.json())
      .then(json => setTransactions(json))
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions: transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}