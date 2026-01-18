import { useState } from "react";
import { InputBox } from "./components";
import { motion } from "framer-motion";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md mx-auto"
      >
        <div className="rounded-2xl p-6 backdrop-blur-lg bg-white/30 border border-white/40 shadow-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="space-y-4"
          >
            {/* From */}
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
            />

            {/* Swap Button */}
            <div className="flex justify-center">
              <motion.button
                type="button"
                onClick={swap}
                whileHover={{ rotate: 180, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 
                           text-white px-4 py-2 rounded-full 
                           shadow-lg font-semibold"
              >
                🔄 Swap
              </motion.button>
            </div>

            {/* To */}
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisable
            />

            {/* Convert Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
                         text-white py-3 rounded-xl font-semibold 
                         shadow-lg tracking-wide"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
