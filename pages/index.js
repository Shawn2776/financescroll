import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsChevronCompactRight } from "react-icons/bs";
import { RxTriangleUp } from "react-icons/rx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col justify-center items-center w-full bg-gray-600">
        <div className="mb-20">MoneyBalance</div>
        <div className="flex justify-evenly">
          <p>Home</p>
          <p>Settings</p>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="flex flex-col min-h-screen">
          <div className="flex justify-start items-center text-3xl">
            <p className="fixed top-30">FEBRUARY</p>
          </div>
          {/* indiv. card  */}
          <div className="flex mt-6">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">5</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$0.00</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
          </div>
          {/* end balance div  */}

          {/* end individual card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">6</p>
            </div>
            {/* end date div  */}
            {/* balance and transactions divdiv  */}

            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="mr-4">
                <div className="flex flex-col">
                  <div>
                    <p>
                      Balance
                      <br />
                      <span className="text-green-500">$303</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <RxTriangleUp className="text-green-500" /> $303
                    </p>
                  </div>
                </div>

                {/* end balance div  */}
              </div>
              <div className="flex flex-col">
                <h2 className="underline">Transactions</h2>
                <table>
                  <tr>
                    <td>Pay</td>
                    <td className="text-green-500">$850</td>
                  </tr>
                  <tr>
                    <td>Rent</td>
                    <td className="text-red-500">$410</td>
                  </tr>
                  <tr>
                    <td>Dave</td>
                    <td className="text-red-500">$137</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>&nbsp;</td>
                  </tr>
                  <tr>
                    <td className="font-bold">total:</td>
                    <td className="text-green-500">$303</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          {/* end individual card  */}

          {/* end individual card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">9</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$0.23</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
          </div>
          {/* end balance div  */}

          {/* end individual card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">10</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$42.00</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
          </div>
          {/* end balance div  */}

          {/* end individual card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">11</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$42.00</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
            {/* end balance div  */}
          </div>
          {/* end card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">12</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$42.00</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
            {/* end balance div  */}
          </div>
          {/* end card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">13</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$42.00</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
            {/* end balance div  */}
          </div>
          {/* end card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">14</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$842.00</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
            {/* end balance div  */}
          </div>
          {/* end card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">15</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$42.00</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
            {/* end balance div  */}
          </div>
          {/* end card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">16</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$42.00</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
            {/* end balance div  */}
          </div>
          {/* end card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">17</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$42.00</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
            {/* end balance div  */}
          </div>
          {/* end card  */}

          {/* indiv. card  */}
          <div className="flex mt-2">
            {/* date div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2">
              <p className="text-5xl">18</p>
            </div>
            {/* end date div  */}
            {/* balance div  */}
            <div className="bg-white p-6 rounded-lg shadow-lg mr-2 flex">
              <div>
                <p>
                  Balance
                  <br />
                  <span className="text-green-500">$42.00</span>
                </p>
              </div>
              <div>
                <BsChevronCompactRight className="text-5xl" />
              </div>
            </div>
            {/* end balance div  */}
          </div>
          {/* end card  */}
        </div>

        {/* end container */}
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
