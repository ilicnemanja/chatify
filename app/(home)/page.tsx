"use server"
import Home from "@/components/pages/Home"

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`);
  console.log(response)

  if (!response.ok) {
    return (
      <div className="flex justify-center items-center my-auto">
        <h1>API is not available</h1>
      </div>
    )
  }

  return (
    <Home />
  )
}

export default Page