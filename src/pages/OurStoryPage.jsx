function OurStoryPage({ onNavigate }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      {/* Header */}
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a65d43]">
          Our story
        </p>

        <h1 className="mt-3 font-serif text-5xl leading-tight text-[#403128] sm:text-6xl">
          Useful things for the quiet spaces in a busy day.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#756556]">
          Morrow &amp; Co. is a fictional little shop built around a real
          engineering question: what happens behind the scenes when
          something goes wrong?
        </p>
      </div>

      {/* Story + Illustration */}
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] bg-[#cbd9bd] p-8 sm:p-10">
          <div className="relative z-10">
            <p className="max-w-sm font-serif text-4xl leading-tight text-[#40503a]">
              A fictional shop with a very real purpose.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#4f6543]">
              Notebooks, pens, cups and a little breathing room.
            </p>
          </div>

          {/* Decorative illustration */}
          <div className="absolute bottom-10 left-10 h-44 w-36 rotate-[-6deg] rounded-xl bg-[#fdfaf4] p-5 shadow-xl">
            <div className="h-2 w-16 rounded-full bg-[#d77b5b]/60" />

            <div className="mt-6 space-y-3">
              <div className="h-px w-full bg-[#d8c6b1]" />
              <div className="h-px w-full bg-[#d8c6b1]" />
              <div className="h-px w-4/5 bg-[#d8c6b1]" />
            </div>

            <p className="absolute bottom-5 font-serif text-lg italic text-[#b76a4d]">
              take your time
            </p>
          </div>

          <div className="absolute right-10 top-24 h-28 w-7 rotate-[28deg] rounded-full bg-[#a65d43] shadow-lg">
            <div className="absolute -bottom-3 left-1/2 h-8 w-3 -translate-x-1/2 rounded-b-full bg-[#554437]" />
          </div>

          <div className="absolute -bottom-10 -right-8 h-40 w-40 rounded-full border-[18px] border-[#f5eee3] bg-[#d77b5b]" />
        </div>

        {/* Story */}
        <div className="rounded-[2.5rem] border border-[#e9e0d2] bg-white p-8 sm:p-10">
          <div className="space-y-6 text-base leading-8 text-[#67584b] sm:text-lg">
            <p>
              Morrow &amp; Co. began as an imagined little corner shop:
              the kind where notebooks, good pens, and a proper cup sit
              alongside encouragement to move a little more slowly.
            </p>

            <p>
              But the shop has another job. It is the customer-facing side
              of a larger engineering project designed to explore what
              happens when real software systems encounter problems.
            </p>

            <p>
              A customer should never have to understand a stack trace,
              database error, or failed API request. They should simply
              receive a clear and reassuring message.
            </p>

            <p>
              Behind the scenes, however, those technical events can be
              captured, structured, grouped, and investigated by engineers.
            </p>
          </div>

          <div className="mt-8 border-t border-[#eee5d9] pt-7">
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="rounded-full bg-[#493b31] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#695346]"
            >
              Explore the collection →
            </button>
          </div>
        </div>
      </div>

      {/* Two perspectives */}
      <div className="mt-16">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a65d43]">
            Two sides of the same system
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#403128]">
            What customers see vs. what engineers see.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Customer */}
          <article className="rounded-[2rem] bg-[#f5eee3] p-8">
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#756556]">
              Customer
            </span>

            <h3 className="mt-6 font-serif text-3xl text-[#493b31]">
              Simple on the surface.
            </h3>

            <p className="mt-4 leading-7 text-[#756556]">
              Browse products, add things to your basket, and place a demo
              order without needing to know anything about the machinery
              underneath.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#a65d43]">
                What a customer might see
              </p>

              <p className="mt-3 font-serif text-xl text-[#493b31]">
                “We couldn't complete that payment.”
              </p>

              <p className="mt-2 text-sm text-[#756556]">
                Your basket is safe. Please try again.
              </p>
            </div>
          </article>

          {/* Engineer */}
          <article className="rounded-[2rem] bg-[#493b31] p-8 text-[#fdfaf4]">
            <span className="inline-flex rounded-full bg-[#695346] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#f5eee3]">
              Engineer
            </span>

            <h3 className="mt-6 font-serif text-3xl">
              Structured underneath.
            </h3>

            <p className="mt-4 leading-7 text-[#d8cabe]">
              The same failure can become a structured technical event,
              carrying the information engineers need to investigate what
              happened and why.
            </p>

            <div className="mt-6 rounded-2xl bg-[#3e322a] p-5 font-mono text-sm leading-6 text-[#d8cabe]">
              <p>
                <span className="text-[#e7c7a6]">event:</span>{' '}
                payment_failed
              </p>
              <p>
                <span className="text-[#e7c7a6]">service:</span>{' '}
                checkout
              </p>
              <p>
                <span className="text-[#e7c7a6]">severity:</span>{' '}
                error
              </p>
              <p>
                <span className="text-[#e7c7a6]">status:</span>{' '}
                investigation_pending
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Closing */}
      <div className="mt-16 rounded-[2.5rem] bg-[#e9ddcc] px-7 py-14 text-center sm:px-16">
        <p className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-[#493b31] sm:text-4xl">
          The storefront is where the story begins.
          <br />
          The Incident Hub is where we learn from it.
        </p>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#756556]">
          One side is designed for people. The other is designed to help
          engineers understand the systems those people rely on.
        </p>
      </div>

      {/* CTA */}
      <div className="py-14 text-center">
        <p className="text-sm text-[#756556]">
          Take a look around the shop.
        </p>

        <button
          type="button"
          onClick={() => onNavigate('shop')}
          className="mt-5 rounded-full border border-[#d8c6b1] px-6 py-3 text-sm font-bold text-[#554437] transition hover:border-[#b76a4d] hover:bg-[#f8eee5]"
        >
          Explore the collection →
        </button>
      </div>
    </section>
  )
}

export default OurStoryPage