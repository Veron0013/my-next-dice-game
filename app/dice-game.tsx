'use client';

import { useState } from 'react';
import InputForm from './components/InputForm';
import TabScreen from './components/TabScreen';
import ToastMessage from './components/ToastMessage';
import { PlayCondition, PlayData } from './types/formTypes';
import { AlertSeverity, AlertState, AlertTitleValue } from './types/toastTypes';
import ResultTable from './components/ResultTable';
import { TabDataType } from './types/tabTypes';

type ResultType = {
  condition: PlayCondition;
  res: boolean;
  message: string;
  roll: number;
  guess: number;
};

function DiceGame() {
  const [showMessage, setShomessage] = useState(false);
  const [roll, setRoll] = useState<number | null>(null);
  const [result, setResult] = useState<ResultType | null>(null);
  const [alertState, setAlertState] = useState<AlertState | null>(null);
  const [tabresult, setTabResult] = useState<TabDataType[]>([]);

  const PlayDice = (playdata: PlayData) => {
    setShomessage(false);

    const diceCheck = {
      Under: (roll: number, threshold: number): ResultType => {
        return {
          condition: PlayCondition.under,
          res: roll < threshold,
          message: `Number was ${roll === threshold ? 'equal' : 'higher'}`,
          roll,
          guess: threshold,
        };
      },
      Over: (roll: number, threshold: number) => {
        return {
          condition: PlayCondition.over,
          res: roll > threshold,
          message: `Number was ${roll === threshold ? 'equal' : 'lower'}`,
          roll,
          guess: threshold,
        };
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

    setTabResult(prev =>
      [
        {
          key: Date.now(),
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }),
          gues: `${result.condition} ${result.guess}`,
          result: result.roll,
          isWon: result.res,
        },
        ...prev,
      ].slice(0, 10)
    );
  };

  return (
    <div className="py-10 w-150 flex flex-1 flex-col justify-center items-center mx-auto mt-20 gap-4">
      {showMessage && alertState && (
        <ToastMessage
          {...alertState}
          open={showMessage}
          onClose={() => setShomessage(false)}
        />
      )}
      <TabScreen finalRoll={roll} onFinish={handleRollFinish} />
      <InputForm onPlay={PlayDice} />
      <ResultTable dataArray={tabresult} />
    </div>
  );
}

export default DiceGame;
