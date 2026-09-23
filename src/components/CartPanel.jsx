function CartPanel({ cart, total, onUpdateQuantity, onCheckout }) {
  const isEmpty = cart.length === 0

  return (
    <aside
      className="h-fit rounded-3xl border border-[#e9e0d2] bg-white p-6 shadow-sm lg:sticky lg:top-6"
      aria-labelledby="cart-heading"
    >
      <h2 id="cart-heading" className="font-serif text-2xl text-[#493b31]">
        Your basket
      </h2>

      {isEmpty ? (
        <p className="mt-4 rounded-2xl bg-[#fbf7ef] p-5 text-sm leading-6 text-[#756556]">
          Nothing here just yet. Pick something lovely from the collection
          above.
        </p>
      ) : (
        <div className="mt-5 max-h-[360px] overflow-y-auto pr-2 scroll-smooth">
          <ul className="divide-y divide-[#eee5d9]">
            {cart.map((item) => (
              <li key={item.id} className="py-4 first:pt-0">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#493b31]">
                      {item.name}
                    </p>

                    <p className="mt-1 text-sm text-[#756556]">
                      £{item.price.toFixed(2)} each
                    </p>
                  </div>

                  <p className="font-semibold text-[#493b31]">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="h-8 w-8 rounded-full border border-[#d8c6b1] text-lg text-[#554437] transition hover:bg-[#f8eee5]"
                    aria-label={`Remove one ${item.name}`}
                  >
                    −
                  </button>

                  <span className="min-w-5 text-center text-sm font-bold">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="h-8 w-8 rounded-full border border-[#d8c6b1] text-lg text-[#554437] transition hover:bg-[#f8eee5]"
                    aria-label={`Add one ${item.name}`}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-[#eee5d9] pt-5 font-serif text-xl text-[#493b31]">
        <span>Total</span>
        <span>£{total.toFixed(2)}</span>
      </div>

      <button
        type="button"
        disabled={isEmpty}
        onClick={onCheckout}
        className="mt-5 w-full rounded-full bg-[#493b31] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#695346] disabled:cursor-not-allowed disabled:bg-[#c8b9a9]"
      >
        Continue to checkout
      </button>
    </aside>
  )
}

export default CartPanel