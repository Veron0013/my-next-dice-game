'use client';

import { useState } from 'react';
import InputForm from './components/InputForm';
import TabScreen from './components/TabScreen';
import ToastMessage from './components/ToastMessage';
import { PlayData } from './types/formTypes';
import { AlertSeverity, AlertState, AlertTitleValue } from './types/toastTypes';

type ResultType = {
  res: boolean;
  message: string;
};

function DiceGame() {
  const [showMessage, setShomessage] = useState(false);
  const [roll, setRoll] = useState<number | null>(null);
  const [result, setResult] = useState<ResultType | null>(null);
  const [alertState, setAlertState] = useState<AlertState>({
    severity: AlertSeverity.error,
    titleText: AlertTitleValue.LOST,
    message: '',
  });

  const PlayDice = (playdata: PlayData) => {
    setShomessage(false);

    const diceCheck = {
      under: (roll: number, threshold: number): ResultType => {
        return { res: roll < threshold, message: 'Number was higher' };
      },
      over: (roll: number, threshold: number) => {
        return { res: roll > threshold, message: 'Number was lower' };
      },
    };

    const { condition, threshold } = playdata;

    const res = Math.floor(Math.random() * 100) + 1;

    setResult(diceCheck[condition](res, threshold));

    setRoll(res);

    //рандом + анимация
    //розрахунок
    //формування об'єкту
    //запис у масив
  };

  const handleRollFinish = () => {
    if (!result) return;

    if (result.res) {
      setAlertState({
        severity: AlertSeverity.success,
        titleText: AlertTitleValue.WON,
      });
    } else {
      setAlertState({
        severity: AlertSeverity.error,
        titleText: AlertTitleValue.LOST,
        message: result.message,
      });
    }

    setResult(null);
    setShomessage(true);
  };

  return (
    <div className="py-10 w-150 flex flex-1 flex-col justify-center items-center mx-auto gap-4">
      {showMessage && alertState.titleText && <ToastMessage {...alertState} />}
      <TabScreen finalRoll={roll} onFinish={handleRollFinish} />
      <InputForm onPlay={PlayDice} />
      {/* tfble */}
    </div>
  );
}

export default DiceGame;
