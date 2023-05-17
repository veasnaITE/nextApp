import Card from "@/components/Card"

export const metadata={
  title:'ISTAD -Products',
  description:'List all products'
}
export default async function Product(){
    const products = await fecthProduct()
return(
    <>
    <main className="container mx-auto flex min-h-screen flex-wrap items-center justify-around p-3 border-0 drop-shadow-sm">
      {
        products.map((product) => (
          <Card 
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.images}
          />
        ))
      }
      </main>
    </>
)
}
 async function fecthProduct(){
    const products = await fetch("https://api.escuelajs.co/api/v1/products", {cache:'no-store'});
    return products.json()
}