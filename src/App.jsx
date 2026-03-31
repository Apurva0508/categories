export default function MotionUSACategoryShopMockup() {
  const featured = [
    'Linear Motion',
    'Motors & Drives',
    'Motion Control',
    'Power Transmission',
    'Sensors & Vision',
    'Measurement & Gaging',
  ];

  const allCategories = [
    'AC Drives',
    'AC Gearmotors',
    'AC Induction Motors',
    'Actuators',
    'Air Bearings',
    'Ball Screws',
    'Belt Drives',
    'Brakes',
    'Cable Management',
    'Circuit Breakers',
    'Clutches',
    'Couplings',
    'DC Drives',
    'DC Motors',
    'Encoders',
    'Gantry Systems',
    'Gearmotors',
    'HMIs',
    'Laser Sensors',
    'Lead Screws',
    'Linear Actuators',
    'Linear Bearings',
    'Linear Encoders',
    'Linear Motors',
    'Linear Positioning Stages',
    'Linear Scales',
    'Linear Shafting',
    'Lubricants',
    'Machine Bases',
    'Machine Mounts',
    'Manual Linear Units',
    'Miniature Encoders',
    'Motion Controllers',
    'Operator Interfaces',
    'Panel Components',
    'Planetary Gearheads',
    'PLCs',
    'Positioning Tables',
    'Power Supplies',
    'Power Transmission',
    'Precision Positioning',
    'Pulleys',
    'Rack & Pinions',
    'Resolvers',
    'Rotary Tables',
    'Screw Jacks',
    'Sensors',
    'Servo Motors',
    'Servo Drives',
    'Smart Motors',
    'Speed Change Drives',
    'Stepper Drives',
    'Stepper Motors',
    'Structural Aluminum',
    'Switches',
    'Timing Belts',
    'Torque Tubes',
    'Tubular Linear Units',
    'Vector Motors',
    'Vision',
    'Worm Gears'
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <section className="relative overflow-hidden bg-white text-slate-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.35),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(96,165,250,0.25),_transparent_32%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-16">
          <div className="max-w-3xl">
            
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-black">
              Shop Categories
            </h1>
            <p className="mt-4 text-slate-700 text-lg leading-8">
              Browse power transmission, linear motion, motors, drives, controls, sensors, and precision positioning components built for industrial applications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                className="w-full sm:w-[520px] rounded-2xl border border-slate-600 bg-white/95 px-5 py-4 text-slate-900 placeholder:text-slate-500 shadow-lg"
                placeholder="Search by category, product family, part type, or brand..."
              />
              <button className="rounded-2xl bg-red-600 px-6 py-4 font-semibold text-white shadow-lg hover:bg-red-700 hover:scale-[1.01] transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featured.map((item) => (
            <div key={item} className="rounded-2xl bg-white border border-slate-200 shadow-sm px-4 py-5 hover:shadow-md transition">
              <div className="text-sm uppercase tracking-wide text-slate-500 mb-2">Featured</div>
              <div className="font-semibold text-slate-900 leading-6">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8">
          <aside className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5 h-fit sticky top-6">
            <h2 className="text-lg font-semibold mb-5">Browse Filters</h2>
            <div className="space-y-5 text-sm">
              <div>
                <div className="font-medium mb-2">Shop by Group</div>
                <div className="space-y-2 text-slate-600">
                  <label className="flex items-center gap-2"><input type="checkbox" /> Drives & Motors</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> Linear Motion</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> Controls & Automation</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> Measurement</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> Mechanical Power Transmission</label>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">Popular Actions</div>
                <div className="space-y-2 text-slate-600">
                  <label className="flex items-center gap-2"><input type="checkbox" /> Request Quote Available</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> Technical Docs</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> In Stock Categories</label>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">Sort</div>
                <select className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-700">
                  <option>Most Popular</option>
                  <option>A to Z</option>
                  <option>Recently Added</option>
                </select>
              </div>
            </div>
          </aside>

          <main>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div>
                <h2 className="text-2xl font-bold">All Categories</h2>
                
              </div>
              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {allCategories.map((category, idx) => (
                <div key={category} className="group rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition">
                  <div className="h-32 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 relative">
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,transparent_0%,rgba(250,204,21,0.55)_100%)]" />
                    <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.18em] text-slate-300">
                      Category {idx + 1}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold leading-6">{category}</h3>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">Shop</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Technical category landing page with key subtypes, brands, documentation, and quote request path.
                    </p>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-slate-500">Browse products</span>
                      <span className="font-medium text-slate-900 group-hover:translate-x-1 transition">View →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}