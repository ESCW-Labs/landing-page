import Link from "next/link";

const Platform = () => {
  return (
    <section className="md:pt-28 sm:pt-24 pt-28 relative z-1">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="bg-section bg-opacity-10 px-16 py-14 rounded-3xl border-2 border-opacity-20 border-section grid grid-cols-12 items-center before:content-[''] before:absolute relative before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10 ">
          <div className="lg:col-span-8 col-span-12">
            <h2 className="text-white sm:text-40 text-30 mb-6 text-center sm:text-start">
              Ready to Build Your <span className="text-primary">Digital Solution</span> ?
            </h2>
            <p className="text-muted text-opacity-60 text-18 text-center sm:text-left">
              Let's discuss your project and discover how we can accelerate
              <span className="hidden sm:inline">
                <br />
              </span>
              your digital transformation journey.
            </p>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex lg:justify-end lg:mt-0 mt-7 justify-center">
              <Link
                href="https://wa.me/6281770777165?text=Halo%20ESCW%20Labs,%0A%0ASaya%20ingin%20menjadwalkan%20konsultasi%20gratis%20terkait%20pengembangan%20software.%20Informasi%20saya:%0A%0A-%20Nama:%0A-%20Perusahaan/Pribadi:%0A-%20Kebutuhan/Layanan:%0A%0ATerima%20kasih%20banyak!"
                className="text-darkmode bg-primary border border-primary py-3 px-5 rounded-lg sm:text-21 text-16 font-medium hover:bg-transparent hover:text-primary text-center w-full sm:text-start sm:w-auto"
                target="_blank"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60 hidden"></div>
      </div>
    </section>
  );
};

export default Platform;
