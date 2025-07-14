const date = "rev 7/14/2025 "
const subtitle = "red0-x's site";
export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50">
      <div className="text-left justify-items-center flex outline-foreground outline-1 p-[20px] bg-rose-500 flex-col items-left h-auto">
        <div className="outline-1 outline-foreground border-0 p-[6px] rounded-2xl bg-rose-400"><h1>{date}</h1></div>
        <div className="outline-1 outline-foreground shadow border-0 p-[6px] rounded-2xl bg-rose-300"><h1>{subtitle}</h1></div>
      </div>
    </footer>
  );
};