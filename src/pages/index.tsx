import type { NextPage } from 'next'
import Backers from '../components/Backers'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Link from 'next/link';
import Collapse from '../components/Collapse';
import Cta from '../components/Cta';
import ExpandableContent from '../components/ExpandableContent';

const Home: NextPage = () => {
  const thesisShortText = (
    <article>
      <p className="my-4">We believe decentralized crypto projects <b>are essentially memes</b>.</p>

      <p className="my-4">But it’s not one that you think...</p>
    </article>
  )
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-dark-indigo to-lovely-peach via-neon-pink py-2 pb-16">
        <Nav />
        <div className="text-white text-center text-5xl sm:text-6xl font-title">
          <Link href="/">
            <a>DegenDAO</a>
          </Link>
        </div>
        <div className="text-white text-center text-md font-misc mx-4 sm:mx-32 lg:mx-96">
          A community-owned managed fund & VC DAO of <a href="https://degenscore.com" target="_blank" rel="noreferrer"><span className="text-light-indigo">Degens</span></a>
        </div>
        <div className="flex flex-row mt-8 justify-center">
          <Cta>Join DegenDAO</Cta>
        </div>
        <div className="flex flex-col">
          <ExpandableContent title="Our collective-thesis" shortText={thesisShortText}>
            <article>
              <p className="my-4">We believe decentralized crypto projects <b>are essentially memes</b>.</p>

              <p className="my-4">But it&#39;s not one that you think...</p>

              <p className="my-4">A meme can be a <b>powerful thing and useful one </b><a href="https://en.wikipedia.org/wiki/Meme" target="_blank" rel="noreferrer" ><span className="text-vaporware-blue cursor-pointer">(see Dawkins’ definition of meme)</span></a>.</p>

              <p className="">Languages are meme.</p>
              <p className="">Cultures are meme.</p>
              <p className=""><b>Heck, even money & currencies are meme!</b></p>

              <p className="my-4">So are cryptocurrencies. <b>It&#39;s something we agreed upon</b>.</p>
              <p className="my-4">Let’s take <b>the Bitcoin</b> as an example, in early days <b>only a handful of people believe in it</b>.</p>

              <p className="my-4">This potential is there. <b>But, there’s an if, if we agree that it has a value</b>.</p>
              <p className="my-4">And now, we are sure that Bitcoin has created its value, <b>the collective believe of the people</b>.</p>
              <p className="my-4">Once this value is agreed upon, <b>a lot of stuffs can be built</b>.</p>
              <p className="my-4">Now, we have decentralized trading, decentralized lending, stablecoins, community of art collectors, and so many more!</p>
              <p className="my-4">Who knows what comes next, but we’re sure it will  <b>need a group of early Degens who are brave enough to take any risks, to venture into the unknown, and Degen DAO is the place to find us</b>.</p>
            </article>
          </ExpandableContent>
          <div className="flex flex-col lg:flex-row justify-evenly">
            <Collapse className="mx-4 sm:mx-8 my-4 lg:w-1/2 xl:w-1/3" title="For Developers">
              <p className="m-2">
                If you’re a project developer (being anonymous is OK, just show us something tangible), you can apply your project to DegenDAO.
              </p>
              <h3 className="m-2 font-bold">
                Accepted projects will gain the access to:
              </h3>
              <ul className="m-2 mx-4">
                <li>- The DegenDAO developers community.</li>
                <li>- Early supporters of the project.</li>
                <li>- Review and feedback from Degen DAO members.</li>
                <li>- Investment opportunities from DegenDAO members.</li>
              </ul>
              <h3 className="m-2 font-bold">
                Requirements of eligibility:
              </h3>

              <ul className="m-2 mx-4">
                <li>- Deployed contracts or running blockchain (testnet are OK).</li>
                <li>- GitHub to the project.</li>
                <li>- Project’s website, Discord, and other social media links.</li>
              </ul>

              <div className="flex justify-end p-4 w-full">
                <Cta>Apply now!</Cta>
              </div>
            </Collapse>
            <Collapse className="mx-4 sm:mx-8 my-4 lg:w-1/2 xl:w-1/3" title="For Potential Degens">
              <p className="m-2">
                Everyone is welcome to join the DAO. We want an inclusive community of Degens.
              </p>
              <h3 className="m-2 font-bold">
                By joining as a Degen you will gain the access to:
              </h3>
              <ul className="m-2 mx-4">
                <li>- Early projects, curated by DegenDAO members of experienced Degens.</li>
                <li>- DegenDAO community & market insights.</li>
                <li>- Investment opportunities to pre-seed, seed, and pre-offer projects.</li>
              </ul>
              <h3 className="m-2 font-bold">
                Requirements of eligibility:
              </h3>
              <ul className="m-2 mx-4">
                <li>- Own a DegenDAO PFP.</li>
                <li className="mx-5">
                  Tiers:
                  <ul className="mx-4">
                    <li>1. Degen Neophyte</li>
                    <li>2. Degen Adept</li>
                    <li>3. Greater Degen</li>
                    <li>4. Archdegen (obtainable only with minimum DegenScore of yyy)</li>
                  </ul>
                </li>
                <li>- DegenDAO PFP are obtainable by locking DegenDAO tokens.</li>
              </ul>
              <div className="flex justify-end p-4 w-full">
                <Cta>Join DegenDAO</Cta>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      <Backers />
      <Footer />
    </div>
  )
}

export default Home
