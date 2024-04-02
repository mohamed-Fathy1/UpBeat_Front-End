interface ListContainerProps {
  title: string;
  children: React.ReactNode;
}

function ListContainer({ title, children }: ListContainerProps) {
  return (
    <div>
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-sm text-gray-400 cursor-pointer hover:text-white">
          View All
        </span>
      </header>
      {children}
    </div>
  );
}

export default ListContainer;
