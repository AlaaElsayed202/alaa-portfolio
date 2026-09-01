type FloatingStickerProps = {
  text: string;
  className?: string;
};

const FloatingSticker = ({ text, className = "" }: FloatingStickerProps) => {
  return (
    <div
      className={`hero-sticker absolute z-20 rounded-full border-2 border-[#17111F] bg-[#FFD44D] px-5 py-3 text-sm font-black text-[#17111F] shadow-[5px_5px_0px_#17111F] ${className}`}
    >
      {text}
    </div>
  );
};

export default FloatingSticker;
