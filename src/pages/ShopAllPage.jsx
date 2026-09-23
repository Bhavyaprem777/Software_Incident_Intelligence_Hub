import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

function ShopAllPage({ onAddToCart, onNavigate }) {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true)

        const response = await fetch(
          'https://dummyjson.com/products?limit=24'
        )

        if (!response.ok) {
          throw new Error('Failed to load products')
        }

        const data = await response.json()

        const formatted = data.products.map((item) => ({
          id: `api-${item.id}`,
          name: item.title,
          description: item.description,
          price: item.price,
          image: item.thumbnail,
        }))

        setProducts(formatted)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase()

    return (
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    )
  })

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      {/* Back to Home */}
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="mb-12 flex items-center gap-2 text-sm font-semibold text-[#756556] transition hover:-translate-x-0.5 hover:text-[#a65d43]"
      >
        <span className="text-lg">←</span>
        Back to home
      </button>

      {/* Heading */}
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a65d43]">
          Shop all
        </p>

        <h1 className="mt-3 font-serif text-4xl leading-tight text-[#403128] sm:text-5xl">
          Explore our collection
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#756556] sm:text-lg">
          Discover products from different categories with real images.
        </p>
      </div>

      {/* Search Row */}
      <div className="mt-10 flex justify-center lg:justify-end">
        <div className="w-full max-w-md">
          <label
            htmlFor="product-search"
            className="mb-2 block text-left text-xs font-bold uppercase tracking-wider text-[#756556]"
          >
            Search products
          </label>

          <div className="relative">
            <span
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-[#8a796a]"
              aria-hidden="true"
            >
              🔍
            </span>

            <input
              id="product-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search for a product..."
              className="w-full rounded-full border border-[#d8c6b1] bg-white py-3.5 pl-11 pr-5 text-sm text-[#493b31] shadow-sm outline-none transition duration-200 placeholder:text-[#a99a8c] hover:border-[#c5ad96] focus:border-[#b76a4d] focus:ring-4 focus:ring-[#b76a4d]/10"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-[#e9e0d2]" />

      {/* Loading State */}
      {loading && (
        <div className="mt-12 rounded-3xl bg-[#f5eee3] p-10 text-center">
          <p className="font-serif text-2xl text-[#493b31]">
            Loading products...
          </p>

          <p className="mt-2 text-sm text-[#756556]">
            Finding a few lovely things for you.
          </p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="mt-12 rounded-3xl bg-[#f8e7db] p-10 text-center text-[#7e4735]">
          <p className="font-serif text-2xl">
            We couldn't load the products.
          </p>

          <p className="mt-2 text-sm">
            {error}
          </p>
        </div>
      )}

      {/* Products */}
      {!loading && !error && (
        <>
          {/* Product Count */}
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-[#756556]">
              Showing{' '}
              <span className="font-semibold text-[#554437]">
                {filteredProducts.length}
              </span>{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-sm font-semibold text-[#a65d43] transition hover:text-[#7f4634]"
              >
                Clear search
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="mt-10 rounded-3xl border border-[#e9e0d2] bg-[#f5eee3] p-12 text-center">
              <p className="font-serif text-2xl text-[#493b31]">
                No products found
              </p>

              <p className="mt-2 text-sm text-[#756556]">
                Nothing matched "{searchTerm}".
              </p>

              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="mt-5 rounded-full bg-[#493b31] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#695346]"
              >
                Show all products
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default ShopAllPage