import { redirect } from "next/navigation";

export default async function page({ params }) {
  const code = params.code;

  // Construct the absolute URL for the API call based on the current host
  const url = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/links/${code}`;
  console.log(url);
  const res = await fetch(url);
  if (!res.ok) {
    redirect("/");
  }
  const link = await res.json();

  if (!link || !link.long_url) {
    redirect("/");
  } else {
    redirect(link.long_url);
  }

  return <div>Loading</div>;
}
