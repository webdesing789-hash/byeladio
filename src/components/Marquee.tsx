const MarqueeText = () => {
  const text = "AI SOLUTIONS • DIGITAL SERVICES • AUTOMATION • ";
  const repeatedText = text.repeat(4);

  return (
    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 overflow-hidden pointer-events-none opacity-20">
      <div className="marquee whitespace-nowrap">
        <span className="font-display text-[8vw] font-bold tracking-tight text-primary/50">
          {repeatedText}
        </span>
        <span className="font-display text-[8vw] font-bold tracking-tight text-primary/50">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
