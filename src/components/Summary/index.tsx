import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer } from './style'

export function Summary() {
  const sumary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard variant="darker">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(sumary.income)}</strong>
      </SummaryCard>

      <SummaryCard variant="darker">
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(sumary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Saldo</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(sumary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
