function LittleJoysPage({ onNavigate }) {
  const joys = [
    {
      number: '01',
      title: 'A blank page',
      text: 'No rule says it has to become anything useful.',
      detail: 'Start anywhere.',
    },
    {
      number: '02',
      title: 'A warm cup',
      text: 'The pause is part of the work, too.',
      detail: 'Take five.',
    },
    {
      number: '03',
      title: 'A note for later',
      text: 'Leave a kind sentence for your future self.',
      detail: 'You will thank you.',
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#e9ddcc] px-7 py-16 text-center sm:px-16 sm:py-20">
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#e7c7a6] opacity-60" />
        <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-[#cbd9bd] opacity-70" />

        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a65d43]">
            Little joys
          </p>

          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-tight text-[#403128] sm:text-6xl">
            Make room for the small stuff.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#756556]">
            A gentle collection of reminders: make tea, write it down,
            take the long way home.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="mx-auto max-w-2xl py-16 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a65d43]">
          A small reminder
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#493b31] sm:text-4xl">
          Not everything needs to be productive.
        </h2>

        <p className="mt-5 text-base leading-7 text-[#756556]">
          Some things are worth doing simply because they make an ordinary
          day feel a little nicer.
        </p>
      </div>

      {/* Joy Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {joys.map((joy) => (
          <article
            key={joy.number}
            className="group rounded-3xl border border-[#e9e0d2] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <p className="font-serif text-4xl text-[#d77b5b]">
                {joy.number}
              </p>

              <span className="rounded-full bg-[#f5eee3] px-3 py-1 text-xs font-semibold text-[#756556]">
                little joy
              </span>
            </div>

            <h2 className="mt-10 font-serif text-3xl text-[#493b31]">
              {joy.title}
            </h2>

            <p className="mt-4 leading-7 text-[#756556]">
              {joy.text}
            </p>

            <div className="mt-7 border-t border-[#eee5d9] pt-5">
              <p className="text-sm font-semibold text-[#a65d43] transition group-hover:translate-x-1">
                {joy.detail} →
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Closing thought */}
      <div className="mt-16 rounded-[2.5rem] bg-[#cbd9bd] px-7 py-14 text-center sm:px-16">
        <p className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-[#40503a] sm:text-4xl">
          “A slower day isn't an empty day. Sometimes it's just a day with
          enough room to notice things.”
        </p>

        <p className="mt-5 text-sm text-[#4f6543]">
          Take your time. There is no rush here.
        </p>
      </div>

      {/* CTA */}
      <div className="py-14 text-center">
        <p className="text-sm text-[#756556]">
          Ready to find something for your own little rituals?
        </p>

        <button
          type="button"
          onClick={() => onNavigate('shop')}
          className="mt-5 rounded-full bg-[#493b31] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#695346]"
        >
          Find a small joy →
        </button>
      </div>
    </section>
  )
}

export default LittleJoysPage