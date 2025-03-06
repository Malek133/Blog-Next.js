import { prisma } from "@/lib/db";

async function GetData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      authorId: true,
      updatedAt: true,
    },
  });

  return data;
}
export default async function Home() {
  const data= await GetData()
  return (
    <div className="py-6 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold tracking-tight">Hello Alphazero</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {data && data.map((item) => (
          <div key={item.id} className=" rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold">{item.title}</h2>
         </div>
       ))}

    </div>
    </div>
  );
}
