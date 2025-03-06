
type Params = Promise<{slug:string}>
const DashboardSlug = async ({params}:{params:Params}) => {

    const {slug}= await params
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello Alphazero : {slug}</h1>
    </div>
  )
}

export default DashboardSlug
