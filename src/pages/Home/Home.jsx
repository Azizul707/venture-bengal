import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Reviews from '../../components/navBar/Reviews';
import OverView from '../../components/OverView';
import TourPackages from './tourPackages';
import Guides from './Guides';
import TourType from '../../components/tourType/TourType';
import TourTypeSlider from '../../components/tourType/TourTypeSlider';
const Home = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full  object-center object-fill md:h-[600px] z-0" src="https://awalkintheworld.com/wp-content/uploads/2020/08/beach-saint-martins-island-bangladesh.jpg" alt="" />
                <div className="absolute top-0 right-0 left-0 bottom-0 max-w-screen-xl mx-auto">
                    <div className="absolute md:left-5 md:top-44 md:space-y-4">
                        <h1 className="md:text-7xl text-white font-extrabold hadingFont md:leading-snug drop-shadow-md">Discover the Magic <br /> of <span className="md:text-8xl text-green-200 drop-shadow-xl">Bangladesh</span> <br /></h1>
                        <p className="tracking-widest text-white md:text-2xl drop-shadow-xl ">Your Ultimate Tourist Guide</p>
                        <button className="btn rounded-none border-none  text-white outline-none hover:bg-blue-500 bg-[#FE5C24]">Explore Now</button>
                    </div>
                </div>
            </div>
            <section className="max-w-screen-2xl mx-auto my-20">
                <div className="">
                    <Tabs>
                        <TabList className='max-w-screen-xl mx-auto mb-10 font-semibold'>
                            <h1 className='text-3xl font-bold mb-5 text-[#FE5C24]'>Find Your Best Tour Guide!</h1>
                            <Tab>Overview</Tab>
                            <Tab>Our Packages</Tab>
                            <Tab>Meet Our Tour Guides</Tab>
                        </TabList>

                        <TabPanel>
                            <OverView></OverView>
                        </TabPanel>
                        <TabPanel>
                            <TourPackages/>
                        </TabPanel>
                        <TabPanel>
                            <Guides/>
                        </TabPanel>
                    </Tabs>
                </div>

            </section>
            <section>
            <div className="max-w-screen-2xl mx-auto">
            <div className=" max-w-screen-xl mx-auto px-3 my-10 text-orange-600">
                    <h2>Find Your Desire Tour By</h2>
                    <h1 className='text-4xl font-bold'>Tour Type</h1>
                </div>
        </div>
                <TourTypeSlider/>
            </section>
            <section className="bg-[#0C3E72]">
                <div className="max-w-screen-xl mx-auto my-20 py-20 px-4">
                    <h1 className='text-slate-100 text-4xl font-semibold'>What Our Tourist Say</h1>
                <Reviews></Reviews>
                </div>
            </section>
        </div>
    );
};

export default Home;