
import Link from "next/link";


interface ListProps {
  link?: string;
  children: React.ReactNode;
  target?:string
  
}

const List: React.FC<ListProps> = ({children, link,target}) => {

  return (
    <div >
      
      <Link target={target && target} className="flex justify-left items-center gap-4 hover:-translate-y-1 py-4 ease-in-out duration-200 px-4" href={link||"/"}>
        {children}
        </Link> 
      
    </div>
  );
};

export default List;
