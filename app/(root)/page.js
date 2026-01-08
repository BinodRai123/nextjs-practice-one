async function getData() {
   // Simulate a 3-second delay to ensure the loader is visible
   await new Promise((resolve) => setTimeout(resolve, 3000));
   return { message: "Data loaded!" };
}

export default async function Page() {
   const data = await getData();
   return <h1>{data.message}</h1>;
}
