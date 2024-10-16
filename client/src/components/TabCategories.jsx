import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios'

const TabCategories = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getData()
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl my-4 mb-6'>Brow's jobs By Categories</h1>
            <Tabs className='container mx-auto px-4'>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {jobs.filter(j => j.category === 'Web Development').map(job => <JobCard key={job._id} job={job} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {jobs.filter(j => j.category === 'Graphics Design').map(job => <JobCard key={job._id} job={job} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {jobs.filter(j => j.category === 'Digital Marketing').map(job => <JobCard key={job._id} job={job} />)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCategories;