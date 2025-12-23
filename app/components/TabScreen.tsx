'use client';

interface Props {
  digit: number;
}

export default function TabScreen({ digit }: Props) {
  return (
    <div className="w-90 h-50 bg-(--screen-bg) flex items-center justify-center text-8xl border-0 rounded-sm">
      {digit}
    </div>
  );
}
