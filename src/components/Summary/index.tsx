import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from "./style"

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard variant='darker'>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant='darker'>
        <header>
          <span>Entradas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}