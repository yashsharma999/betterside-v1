'use client';

export default function InfoBlock({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div className='text-5xl mb-2'>{icon}</div>
      <h3 className='text-xl font-bold mb-4'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
