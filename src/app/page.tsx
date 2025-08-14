'use client';
import { useState } from 'react';
import ExampleSvg from '@/components/ExampleSvg';
import ExampleSvg2 from '@/components/ExampleSvg2';
import ExampleSvg3 from '@/components/ExampleSvg3';
import ExampleSvg4 from '@/components/ExampleSvg4';

export default function Home() {
  const [svgIndex, setSvgIndex] = useState(2);

  return (
    <div className="font-sans min-h-screen p-8 flex flex-col items-center justify-center relative bg-white">
      {/* SVG内容区 */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="relative w-[800px] h-[600px] flex items-center justify-center">
          {svgIndex === 1 && (
            // SVG1内容（原有内联SVG）- 居中显示
            <ExampleSvg />
          )}
          {svgIndex === 2 && (
            <ExampleSvg2 />
          )}
          {svgIndex === 3 && (
            <ExampleSvg3 />
          )}
          {svgIndex === 4 && (
            <ExampleSvg4 />
          )}
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center gap-4">
        <button onClick={() => setSvgIndex(1)} className={`px-6 py-2 rounded font-bold shadow transition-colors ${svgIndex===1?'bg-blue-500 text-white':'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}>SVG 1</button>
        <button onClick={() => setSvgIndex(2)} className={`px-6 py-2 rounded font-bold shadow transition-colors ${svgIndex===2?'bg-blue-500 text-white':'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}>SVG 2</button>
        <button onClick={() => setSvgIndex(3)} className={`px-6 py-2 rounded font-bold shadow transition-colors ${svgIndex===3?'bg-blue-500 text-white':'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}>SVG 3</button>
      </div>
    </div>
  );
}
