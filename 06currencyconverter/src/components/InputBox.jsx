/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useId} from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisabled = false,
  className = ''
}) {

  const id = useId();
  return (
    <div className={`flex bg-white p-3 rounded-lg text-sm ${className}`}>
      <div className='w-1-2'>
        <label htmlFor="id" className=' inline-block text-black/40 mb-2 ' >{label}</label>
        <input
          type="number"
          className=' bg-transparent outline-none py-1.5 w-full'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange &&  onAmountChange(Number(e.target.value))
          }
          name="" id="id" />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectedCurrency}
          className=' rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          onChange={(e) => onCurrencyChange &&  onCurrencyChange(e.target.value)
          }
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox