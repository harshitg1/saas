import { motion } from 'framer-motion';

type Candle = {
  open: number;
  close: number;
  high: number;
  low: number;
};

const candles: Candle[] = [
  { open: 40, close: 60, high: 70, low: 30 },
  { open: 50, close: 35, high: 55, low: 30 },
  { open: 30, close: 50, high: 55, low: 25 },
  { open: 55, close: 45, high: 60, low: 40 },
  { open: 45, close: 65, high: 70, low: 40 },
  { open: 60, close: 50, high: 65, low: 45 },
];

export default function CandlestickStrip() {
  const chartHeight = 80; // total chart height in px
  const maxValue = Math.max(...candles.flatMap(c => [c.high, c.low]));
  const minValue = Math.min(...candles.flatMap(c => [c.high, c.low]));
  const scale = chartHeight / (maxValue - minValue);

  return (
    <div className="absolute top-14 left-4 flex flex-row items-end space-x-2 z-20 h-20">
      {candles.map((candle, idx) => {
        const isBullish = candle.close >= candle.open;
        const bodyHeight = Math.abs(candle.close - candle.open) * scale;
        const bodyBottom = (Math.min(candle.open, candle.close) - minValue) * scale;
        const wickHeight = (candle.high - candle.low) * scale;
        const wickBottom = (candle.low - minValue) * scale;

        return (
          <div key={idx} className="relative w-3 h-full flex flex-col justify-start">
            {/* Wick */}
            <motion.div
              className={`w-[2px] ${isBullish ? 'bg-green-600' : 'bg-red-600'} absolute left-1/2 transform -translate-x-1/2 `}
              style={{ height: wickHeight, bottom: wickBottom }}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Body */}
            <motion.div
              className={`w-3 ${isBullish ? 'bg-green-500' : 'bg-red-500'}  absolute left-1/2 transform -translate-x-1/2`}
              style={{ height: bodyHeight, bottom: bodyBottom }}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        );
      })}
    </div>
  );
}
