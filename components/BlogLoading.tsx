import { Skeleton } from "./ui/skeleton";

const BlogLoding = () => {
    return ( 
        <div className="space-y-4">
            <div className='flex max-md:flex-col w-full gap-4  justify-center items-center py-8 bg-secondaryBackground px-3 rounded-lg' >
          <section className=' px-4'>
          <Skeleton className="h-[100px] w-[200px] bg-primaryBackground " />
          </section>
          <section className='space-y-4 w-full'>
        <Skeleton className="h-4 w-[200px] bg-primaryBackground" />
          <Skeleton className="h-4 w-full bg-primaryBackground" />
          <Skeleton className="h-4 w-full bg-primaryBackground" />
          </section>
        </div>

        <div className='flex max-md:flex-col w-full gap-4  justify-center items-center py-8 bg-secondaryBackground px-3 rounded-lg' >
          <section className=' px-4'>
          <Skeleton className="h-[100px] w-[200px] bg-primaryBackground " />
          </section>
          <section className='space-y-4 w-full'>
        <Skeleton className="h-4 w-[200px] bg-primaryBackground" />
          <Skeleton className="h-4 w-full bg-primaryBackground" />
          <Skeleton className="h-4 w-full bg-primaryBackground" />
          </section>
        </div>

        <div className='flex max-md:flex-col w-full gap-4  justify-center items-center py-8 bg-secondaryBackground px-3 rounded-lg' >
          <section className=' px-4'>
          <Skeleton className="h-[100px] w-[200px] bg-primaryBackground " />
          </section>
          <section className='space-y-4 w-full'>
        <Skeleton className="h-4 w-[200px] bg-primaryBackground" />
          <Skeleton className="h-4 w-full bg-primaryBackground" />
          <Skeleton className="h-4 w-full bg-primaryBackground" />
          </section>
        </div>
        </div>
     );
}
 
export default BlogLoding;