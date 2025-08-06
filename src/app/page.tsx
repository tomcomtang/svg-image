import Image from "next/image";

export default function Home() {
  // 添加时间戳，强制每次刷新都重新加载
  const timestamp = Date.now();
  
  return (
    <div className="font-sans min-h-screen p-8 flex items-center justify-center relative">
      {/* 所有SVG图片以遮罩模式叠加显示 */}
      <div className="relative w-[346px] h-[168px]">
        <Image
          src={`/example.svg?t=${timestamp}`}
          alt="示例SVG文件"
          width={346}
          height={168}
          className="absolute inset-0"
        />
        
      </div>
    </div>
  );
}
