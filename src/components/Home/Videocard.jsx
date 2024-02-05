export default function Videocard() {
  return (
    <div className="relative min-w-[154px] h-[154px] bg-gradient-to-b from-brand-purple to-black rounded-lg flex justify-center items-center">
      <div className="w-[150px] h-[150px] bg-brand-bg-light rounded-lg flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 hover:w-12 hover:h-12 text-brand-purple hover:cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
