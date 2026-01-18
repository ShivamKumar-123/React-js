import React, { useId } from "react";
import { motion } from "framer-motion";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className={`bg-gradient-to-br from-blue-50 via-white to-purple-50 
                  rounded-2xl p-5 shadow-lg flex items-center gap-4 
                  border border-blue-100 ${className}`}
    >
      {/* Amount Section */}
      <div className="flex flex-col w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-xs font-semibold text-blue-600 mb-1"
        >
          {label}
        </label>

        <motion.input
          whileFocus={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300 }}
          id={amountInputId}
          type="number"
          placeholder="0.00"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-full rounded-xl border border-blue-200 
                     bg-white/70 backdrop-blur px-3 py-2 text-sm 
                     outline-none focus:ring-2 focus:ring-purple-400
                     focus:border-purple-400
                     disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
      </div>

      {/* Currency Section */}
      <div className="flex flex-col w-1/2 text-right">
        <span className="text-xs font-semibold text-purple-600 mb-1">
          Currency
        </span>

        <motion.select
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          className="rounded-xl border border-purple-200 
                     bg-gradient-to-r from-purple-50 to-blue-50 
                     px-3 py-2 text-sm cursor-pointer outline-none
                     focus:ring-2 focus:ring-blue-400
                     focus:border-blue-400
                     disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </motion.select>
      </div>
    </motion.div>
  );
}

export default InputBox;
