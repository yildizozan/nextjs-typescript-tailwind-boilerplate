import { FC } from 'react'

interface CreditCardProps {
  isCreditCard: boolean
}

const CreditCard: FC<CreditCardProps> = ({ isCreditCard }) => {
  return (
    <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
      <img
        className="relative object-cover w-full h-full rounded-xl"
        src={isCreditCard ? 'https://i.imgur.com/kGkSg1v.png' : 'https://i.imgur.com/Zi6v09P.png'}
        alt=""
      />

      <div className="w-full px-8 absolute top-8">
        <div className="flex justify-between">
          <div className="">
            <p className="font-light">Kart Sahibi</p>
            <p className="font-medium tracking-widest">Karthik P</p>
          </div>
          <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" alt="" />
        </div>
        <div className="pt-1">
          <p className="font-light">Kart Numarası</p>
          <p className="font-medium tracking-more-wider">4642 3489 9867 7632</p>
        </div>
        <div className="pt-6 pr-6">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light text-xs text-xs">Son Kul Tarihi</p>
              <p className="font-medium tracking-wider text-sm">03/25</p>
            </div>
            <div className="">
              <p className="font-light text-xs">CVV</p>
              {/*<p className="font-bold tracking-more-wider text-sm">···</p>*/}
              <p className="font-bold tracking-more-wider text-sm">123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
