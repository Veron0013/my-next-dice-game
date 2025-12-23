'use client';

import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
  finalRoll: number | null;
  onFinish: () => void;
}

export default function TabScreen({ finalRoll, onFinish }: Props) {
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    if (finalRoll === null) return;

    let ticks = 0;
    const maxTicks = 20;

    const interval = setInterval(() => {
      setDisplay(Math.floor(Math.random() * 100) + 1);
      ticks++;

      if (ticks >= maxTicks - 2) {
        setDisplay(finalRoll);
      }
      if (ticks >= maxTicks) {
        clearInterval(interval);
        onFinish();
      }
    }, 80);

    return () => {
      clearInterval(interval);
    };
    //no need to render on onFinish
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalRoll]);

  return (
    <div className="w-90 h-50 bg-(--screen-bg) flex items-center justify-center text-8xl border-0 rounded-sm">
      <Typography sx={{ fontSize: 96 }} textAlign="center">
        {display ?? '00'}
      </Typography>
    </div>
  );
}
