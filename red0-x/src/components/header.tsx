
const title = "red0-x";
const subtitle = "Welcome to my page";
export const Header = () => {
  return (
    <header>
    <div className="text-left justify-items-center flex outline-foreground outline-1 p-[20px] bg-rose-500 items-left h-auto">
        <div className="outline-1 outline-foreground border-0 p-[6px] rounded-2xl bg-rose-400"><h1>{title}</h1></div>
        <div className="outline-1 outline-foreground border-0 p-[6px] rounded-2xl bg-rose-300"><h1>{subtitle}</h1></div>
    </div>
      
    </header>
  );
};