import AIChat from "@/components/AIChat";
import MobileMenu from "@/components/MobileMenu";

const services = [
  {
    number: "01",
    title: "Visa Services",
    description:
      "Tourist visa, business visa, study visa, work permit, and professional visa consultation and assistance.",
    icon: "🛂",
  },
  {
    number: "02",
    title: "Ticket Reservation",
    description:
      "Local and international flight reservations with access to major airlines and competitive fares.",
    icon: "✈️",
  },
  {
    number: "03",
    title: "Hotel Reservation",
    description:
      "Worldwide hotel bookings, from luxury stays to budget accommodation, with comfortable options.",
    icon: "🏨",
  },
  {
    number: "04",
    title: "Car Rental",
    description:
      "Local and international car hire, short and long-term rentals, airport pickup, and chauffeur services.",
    icon: "🚘",
  },
  {
    number: "05",
    title: "Import & Export",
    description:
      "General merchandise, cargo handling, logistics, shipping, door-to-door delivery, and customs clearance.",
    icon: "📦",
  },
  {
    number: "06",
    title: "Tour Packages",
    description:
      "Local and international tours with travel packages designed around your destination and needs.",
    icon: "🌍",
  },
  {
    number: "07",
    title: "Hajj & Umrah",
    description:
      "Travel arrangements and assistance for Hajj and Umrah journeys.",
    icon: "🕋",
  },
  {
    number: "08",
    title: "Travel Assistance",
    description:
      "Travel insurance, passport assistance, airport assistance, consultation, and travel guidance.",
    icon: "🧳",
  },
];

const googleMapsApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

const mapLocation =
  "Amoduba Burga Road, Opposite Police Divisional Headquarters, Kofar Hausa, Keffi LGA, Nasarawa State, Nigeria";

const googleMapUrl = googleMapsApiKey
  ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(
      mapLocation
    )}&zoom=16&maptype=roadmap`
  : "";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020f25] text-white">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="flex items-center">
            <img
              src="/images/agom-logo.jpg"
              alt="AGOM Multi Global Service NG LTD"
              className="h-14 w-auto max-w-[250px] rounded object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-white/90 transition hover:text-yellow-400"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-white/90 transition hover:text-yellow-400"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-white/90 transition hover:text-yellow-400"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-white/90 transition hover:text-yellow-400"
            >
              Contact
            </a>

            <a
              href="https://wa.me/2348160044794?text=Hello%20AGOM%20Multi%20Global%20Service%20NG%20LTD%2C%20I%20would%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-bold text-[#03162f] transition hover:bg-yellow-300"
            >
              WhatsApp Us
            </a>
          </nav>

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#020f25] via-[#063b85] to-[#08295a]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.16),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-2 lg:px-8">
          {/* Hero Content */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-yellow-400" />

              <span className="text-sm font-semibold tracking-wide text-yellow-300">
                TRAVEL • CONSULTANCY • GLOBAL SERVICES
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your Journey,
              <span className="block text-yellow-400">
                Our Priority.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
              Professional travel, visa, accommodation, transportation,
              logistics and global business services designed to make your
              journey easier.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="rounded-full bg-yellow-400 px-7 py-4 text-center font-bold text-[#03162f] transition hover:bg-yellow-300"
              >
                Explore Our Services
              </a>

              <a
                href="https://wa.me/2348160044794?text=Hello%20AGOM%20Multi%20Global%20Service%20NG%20LTD%2C%20I%20would%20like%20to%20make%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-white/15 pt-7">
              <div>
                <p className="text-2xl font-black text-yellow-400">
                  11+
                </p>

                <p className="mt-1 text-xs text-blue-100">
                  Service Areas
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-yellow-400">
                  24/7
                </p>

                <p className="mt-1 text-xs text-blue-100">
                  Customer Support
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-yellow-400">
                  Global
                </p>

                <p className="mt-1 text-xs text-blue-100">
                  Travel Solutions
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-white/10 to-white/5 p-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-yellow-300">
                    AGOM GLOBAL SERVICES
                  </span>

                  <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-[#03162f]">
                    READY
                  </span>
                </div>

                <div className="mt-12 text-center">
                  <div className="text-8xl">✈️</div>

                  <h2 className="mt-7 text-3xl font-black">
                    Travel Without
                    <span className="block text-yellow-400">
                      The Stress
                    </span>
                  </h2>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-blue-100">
                    From your first enquiry to your final destination,
                    AGOM is here to assist you.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl">🛂</div>

                    <p className="mt-2 text-xs text-blue-100">
                      Visa
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl">🏨</div>

                    <p className="mt-2 text-xs text-blue-100">
                      Hotels
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-center">
                    <div className="text-2xl">🚘</div>

                    <p className="mt-2 text-xs text-blue-100">
                      Car Hire
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="bg-white py-24 text-slate-900"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Complete Travel & Global Services
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you are travelling, relocating, booking accommodation,
              moving cargo or planning a religious journey, AGOM Multi Global
              Service NG LTD is ready to assist.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="text-4xl">
                    {service.icon}
                  </div>

                  <span className="text-sm font-black text-blue-200">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-black text-[#063b85]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <a
                  href={`https://wa.me/2348160044794?text=${encodeURIComponent(
                    `Hello AGOM Multi Global Service NG LTD, I am interested in your ${service.title} service.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-bold text-blue-700 transition group-hover:text-yellow-600"
                >
                  Make an enquiry
                  <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section
        id="about"
        className="bg-[#03162f] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Why Choose AGOM
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Reliable service from planning to destination.
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                AGOM Multi Global Service NG LTD combines travel assistance,
                consultancy and global services under one trusted brand.
                Our goal is simple: make every customer journey easier,
                clearer and more convenient.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 font-black text-[#03162f]">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Professional Assistance
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-blue-100">
                      Friendly guidance throughout your travel and service
                      process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 font-black text-[#03162f]">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Local & International
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-blue-100">
                      Solutions for journeys and services within Nigeria and
                      internationally.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 font-black text-[#03162f]">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Customer First
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-blue-100">
                      Your needs remain at the centre of everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                Our Promise
              </p>

              <h3 className="mt-5 text-3xl font-black">
                Your Journey,
                <span className="block text-yellow-400">
                  Our Priority.
                </span>
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                We are committed to providing reliable, professional and
                customer-focused travel and global service solutions while
                keeping communication clear and the customer experience at
                the heart of our work.
              </p>

              <a
                href="https://wa.me/2348160044794?text=Hello%20AGOM%2C%20I%20would%20like%20to%20speak%20with%20an%20agent."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-yellow-400 px-6 py-3 font-bold text-[#03162f] transition hover:bg-yellow-300"
              >
                Speak With Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="bg-slate-50 py-24 text-slate-900"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Contact AGOM
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Let&apos;s Plan Your Journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Have a question, travel request or service enquiry? Reach out
              to our team directly.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Office */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                📍
              </div>

              <h3 className="mt-6 text-xl font-black text-[#063b85]">
                Our Office
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Amoduba Burga Road,
                <br />
                Opposite Police Divisional Headquarters,
                <br />
                Kofar Hausa,
                <br />
                Keffi LGA, Nasarawa State,
                <br />
                Nigeria.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                💚
              </div>

              <h3 className="mt-6 text-xl font-black text-[#063b85]">
                WhatsApp
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Chat with AGOM directly for enquiries, travel assistance and
                service requests.
              </p>

              <a
                href="https://wa.me/2348160044794?text=Hello%20AGOM%20Multi%20Global%20Service%20NG%20LTD%2C%20I%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-bold text-green-700 hover:text-green-600"
              >
                +234 816 004 4794 →
              </a>
            </div>

            {/* Phone */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-2xl">
                📞
              </div>

              <h3 className="mt-6 text-xl font-black text-[#063b85]">
                Call Us
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Speak directly with our team for enquiries and assistance.
              </p>

              <div className="mt-5 space-y-2">
                <a
                  href="tel:+2349021180979"
                  className="block font-bold text-blue-700 hover:text-blue-600"
                >
                  +234 902 118 0979
                </a>

                <a
                  href="tel:+2348160044794"
                  className="block font-bold text-blue-700 hover:text-blue-600"
                >
                  +234 816 004 4794
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GOOGLE MAP
      ========================================================= */}
      <section className="bg-white py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Find Us
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Visit Our Office
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Come and visit AGOM Multi Global Service NG LTD at our office
                in Kofar Hausa, Keffi, Nasarawa State.
              </p>

              <div className="mt-7 rounded-3xl bg-slate-50 p-6">
                <p className="font-bold text-[#063b85]">
                  AGOM Multi Global Service NG LTD
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Amoduba Burga Road,
                  <br />
                  Opposite Police Divisional Headquarters,
                  <br />
                  Kofar Hausa,
                  <br />
                  Keffi LGA, Nasarawa State,
                  <br />
                  Nigeria.
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Amoduba%20Burga%20Road%2C%20Kofar%20Hausa%2C%20Keffi%2C%20Nasarawa%20State%2C%20Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#063b85] px-6 py-3 font-bold text-white transition hover:bg-[#08295a]"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="relative min-h-[400px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl lg:min-h-[520px]">
              {googleMapsApiKey ? (
                <iframe
                  title="AGOM Multi Global Service NG LTD - Keffi Office Location"
                  src={googleMapUrl}
                  className="absolute inset-0 h-full min-h-[400px] w-full border-0 lg:min-h-[520px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center p-8 text-center lg:min-h-[520px]">
                  <div className="text-5xl">📍</div>

                  <h3 className="mt-5 text-xl font-black text-[#063b85]">
                    AGOM Office Location
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                    The interactive Google Map will appear here once the
                    Google Maps Embed API key is added.
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Amoduba%20Burga%20Road%2C%20Kofar%20Hausa%2C%20Keffi%2C%20Nasarawa%20State%2C%20Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 rounded-full bg-[#063b85] px-6 py-3 text-sm font-bold text-white"
                  >
                    Open Location in Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CEO
      ========================================================= */}
      <section className="bg-[#020e22] py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="flex items-center justify-center bg-gradient-to-br from-[#063b85] to-[#020f25] p-8">
                <img
                  src="/images/ceo-yahaya.jpg"
                  alt="Yahaya Abubakar Yahaya, CEO of AGOM Multi Global Service NG LTD"
                  className="block h-auto w-full max-w-md rounded-2xl object-cover shadow-2xl"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                  Leadership
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  Yahaya Abubakar Yahaya
                </h2>

                <p className="mt-2 text-lg font-semibold text-yellow-400">
                  Chief Executive Officer
                </p>

                <p className="mt-6 leading-8 text-blue-100">
                  At AGOM Multi Global Service NG LTD, our commitment is to
                  provide reliable, professional and customer-focused travel
                  and global services.
                </p>

                <div className="mt-8">
                  <p className="text-sm font-semibold text-white">
                    AGOM Multi Global Service NG LTD
                  </p>

                  <p className="mt-1 text-sm text-blue-200">
                    Your Journey, Our Priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-[#010a18] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <img
                src="/images/agom-logo.jpg"
                alt="AGOM Multi Global Service NG LTD"
                className="h-14 w-auto max-w-[250px] rounded object-contain"
              />

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Professional travel, consultancy, logistics and global
                services.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white">
                Contact
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>
                  Amoduba Burga Road, Opposite Police Divisional
                  Headquarters, Kofar Hausa, Keffi LGA, Nasarawa State,
                  Nigeria.
                </p>

                <a
                  href="tel:+2349021180979"
                  className="block hover:text-yellow-400"
                >
                  +234 902 118 0979
                </a>

                <a
                  href="tel:+2348160044794"
                  className="block hover:text-yellow-400"
                >
                  +234 816 004 4794
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white">
                Quick Links
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <a
                  href="#home"
                  className="block hover:text-yellow-400"
                >
                  Home
                </a>

                <a
                  href="#services"
                  className="block hover:text-yellow-400"
                >
                  Services
                </a>

                <a
                  href="#about"
                  className="block hover:text-yellow-400"
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="block hover:text-yellow-400"
                >
                  Contact
                </a>

                <a
                  href="https://wa.me/2348160044794?text=Hello%20AGOM%2C%20I%20need%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-semibold text-green-400 hover:text-green-300"
                >
                  WhatsApp AGOM
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-7 text-center text-sm text-slate-500">
          © 2026 AGOM Multi Global Service NG LTD.
            All rights reserved.
          </div>
        </div>
      </footer>

      {/* =========================================================
          AGOM AI ASSISTANT
      ========================================================= */}
      <AIChat />

      {/* =========================================================
          FLOATING WHATSAPP
      ========================================================= */}
      <a
        href="https://wa.me/2348160044794?text=Hello%20AGOM%20Multi%20Global%20Service%20NG%20LTD%2C%20I%20need%20assistance."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AGOM on WhatsApp"
        className="fixed bottom-5 left-5 z-[100] grid h-16 w-16 place-items-center rounded-2xl bg-[#16c46a] text-2xl shadow-2xl ring-4 ring-white transition hover:scale-105 hover:bg-[#12ad5b]"
      >
        💬
      </a>
    </main>
  );
}