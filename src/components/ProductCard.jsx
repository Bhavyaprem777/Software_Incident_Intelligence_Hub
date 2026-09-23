function ProductCard({ product, onAddToCart }) {
  return <article className="group rounded-3xl border border-[#e9e0d2] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
   <div className="h-56 overflow-hidden rounded-2xl bg-[#f5eee3]">
  <img
    src={product.image}
    alt={product.name}
    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    loading="lazy"
  />
</div>
    <div className="px-2 pb-2 pt-5">
    <div className="flex items-start justify-between gap-4">
    <h3 className="font-serif text-2xl text-[#493b31]">{product.name}</h3>
    <span className="whitespace-nowrap text-sm font-bold text-[#a65d43]">£{product.price.toFixed(2)}</span>
    </div>
    <p className="mt-3 min-h-12 text-sm leading-6 text-[#756556]">{product.description}</p>
    <button type="button" onClick={() => onAddToCart(product)} className="mt-5 rounded-full border border-[#d8c6b1] px-4 py-2 text-sm font-bold text-[#554437] transition hover:border-[#b76a4d] hover:bg-[#f8eee5]">Add to basket</button>
    </div>
    </article>
}
export default ProductCard
