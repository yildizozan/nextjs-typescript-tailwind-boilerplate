import { FC } from 'react'

import CreditCard from 'components/CreditCard'

const HomePage: FC = () => {
  return (
    <div className="container p-8">
      <CreditCard isCreditCard={true} />
    </div>
  )
}

export default HomePage
