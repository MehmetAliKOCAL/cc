import Link from 'next/link';

export default function DashboardCards({ items }) {
  return (
    <div className='flex flex-wrap gap-4'>
      {items.map((card) => {
        return (
          <Link
            id={card.title}
            key={card.title}
            href={{ pathname: card.redirectTo }}
            className={`w-64 h-40 p-4 rounded-lg flex flex-col justify-between cursor-pointer active:scale-90 transition-all duration-200 ${card.bgColor}`}
          >
            <div className='flex flex-col'>
              {card.icon}
              <p
                className={`mt-4 text-sm text-fadedTextColor font-medium ${
                  card.textColor ? card.textColor : ''
                }`}
              >
                {card.title}
              </p>
            </div>
            <div className='font-bold uppercase text-right flex justify-end items-end'>
              <p className='text-3xl'>{card.count}</p>
              <p>{card?.currency}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
