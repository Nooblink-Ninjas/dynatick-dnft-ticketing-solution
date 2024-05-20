//lg:py-56
export default function Home() {
  return (
    <section className="bg-center bg-no-repeat bg-[url('http://localhost:3000/images/background.jpg')] bg-gray-700 bg-blend-multiply ">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 ">
            <div className="landing-box-background py-5 bg-opacity-10">
              <h3 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-color-white ">Manchester City v Manchester United Tickets</h3>
              <p className="mb-8 text-lg font-normal text-gray-300 header-text">Wembley Stadium, London, United Kingdom</p>
              <h3 className="mb-4 text-xl font-bold tracking-tight leading-none text-color-white ">Saturday, 25 May 2024 15:00</h3>
              <p className="mb-4 text-lg font-normal text-gray-300 header-text"> From 20.00 USD</p>
              <div className="flex space-y-4 flex-row justify-center">
                <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base 
                font-medium text-center rounded-lg border border-red hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    Connect Wallet
                </a>  
             </div>
            </div>
        </div>
    </section>
  );
}
