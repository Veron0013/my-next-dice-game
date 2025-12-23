'use client';

import InputForm from './components/InputForm';
import TabScreen from './components/TabScreen';

function DiceGame() {
  return (
    <div className="py-10 w-150 flex flex-1 flex-col justify-center items-center mx-auto gap-4">
      <TabScreen digit={500} />
      <InputForm />
      {/* tfble */}
      {/* toast */}
      Gogog
    </div>
  );
}

export default DiceGame;
