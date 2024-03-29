import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData()
    useTitle('allNews')
    return (
        <div>
            <h3>this is home page: {allNews.length}</h3>
            {
                allNews.map( news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }

        </div>
    );
};

export default Home;