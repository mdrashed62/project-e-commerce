import SellCard from '@/components/dashboard/sell-card/SellCard';
import OrdersTable from '@/components/dashboard/table/OrdersTable';
import React from 'react';

const page = () => {
    return (
        <div className='p-2'>
            <SellCard />
            <OrdersTable />
        </div>
    );
};

export default page;