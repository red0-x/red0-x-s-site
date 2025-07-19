import constHandler from "@/app/constHandler";

const cD = constHandler();
let mh = cD.rev[0]
let dy = cD.rev[1]
let yr = cD.rev[2]

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-white/30 backdrop-blur-xl border-t border-white/40 rounded-t-3xl">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="border-0 p-2 rounded-2xl bg-white/40 backdrop-blur-md w-fit">
          <h1>{`rev ${mh}/${dy}/20${yr}`}</h1>
        </div>
        <div className="border-0 p-2 rounded-2xl bg-white/30 backdrop-blur-md w-fit mt-2">
          <h1>{cD.red0xx}</h1>
        </div>
      </div>
    </footer>
  );
};