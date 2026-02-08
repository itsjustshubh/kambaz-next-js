export default function TailwindFilters() {
  return (
    <div>
      <div>
        <h3 className="text-xl font-bold mt-6">Blurs</h3>
        <div className="flex gap-2 flex-wrap">
          <img
            className="blur-none w-1/4 min-w-[120px]"
            src="/images/reactjs.jpg"
            alt="Blur none"
          />
          <img
            className="blur-sm w-1/4 min-w-[120px]"
            src="/images/reactjs.jpg"
            alt="Blur sm"
          />
          <img
            className="blur-lg w-1/4 min-w-[120px]"
            src="/images/reactjs.jpg"
            alt="Blur lg"
          />
          <img
            className="blur-2xl w-1/4 min-w-[120px]"
            src="/images/reactjs.jpg"
            alt="Blur 2xl"
          />
        </div>
      </div>
    </div>
  );
}
