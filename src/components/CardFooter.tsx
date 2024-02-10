interface CardFooterProps {
  setClearMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardFooter = ({ setClearMessage }: CardFooterProps) => {
  return (
    <footer className="p-3 border-t border-blue-200">
      <button
        type="button"
        className="p-2 w-full text-center rounded-lg border border-red-300 bg-red-200/60 text-red-600 hover:bg-red-200 transition-colors font-semibold"
        onMouseEnter={() => {
          setClearMessage(true);
        }}
        onMouseLeave={() => {
          setClearMessage(false);
        }}
      >
        Clear Recent
      </button>
    </footer>
  );
};
