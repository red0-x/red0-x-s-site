import constHandler from "@/app/constHandler";

const cD = constHandler();

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-xl border-b border-white/40 rounded-b-3xl">
      <div className="flex items-center justify-center p-4">
        <div className="border-0 p-2 rounded-2xl bg-white/40 backdrop-blur-md w-fit">
          <h1>{cD.announcement}</h1>
        </div>
      </div>
    </header>
  );
};