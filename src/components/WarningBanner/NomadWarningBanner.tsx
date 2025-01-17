import React from 'react'
import { InfoCard } from 'components/InfoCard'


//TODO: Adopt this in case we need it in the future
export function NomadWarningBanner({ style }: { style?: any }) {
  return (
    <InfoCard
      style={style}
      title="Nomad Assets on Eth"
      description={
        <ol>
          <li>
            The Nomad Bridge contract on Ethereum mainnet was exploited. We are working with the Nomad and Eth teams
            and will keep you updated.
          </li>
          <li>
            The USD prices on PepeSwap are derived from madUSDC. Given the exploit Nomad assets might not have their
            expected value.
          </li>
        </ol>
      }
    />
  )
}
