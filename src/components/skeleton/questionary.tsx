import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function SkeletonQuestionary() {
  return (
    <div className='pt-10'>
      <Skeleton shape='circle' size='4rem' className='mr-2 mb-2'></Skeleton>
      <div>
        <Skeleton width='100%' className='mb-2'></Skeleton>
        <Skeleton width='75%'></Skeleton>
      </div>
      <div>
        <div className='w-full md:w-6 p-3'>
          <Skeleton className='mb-2'></Skeleton>
          <Skeleton width='10rem' className='mb-2'></Skeleton>
          <Skeleton width='5rem' className='mb-2'></Skeleton>
          <Skeleton height='2rem' className='mb-2'></Skeleton>
          <Skeleton width='10rem' height='4rem'></Skeleton>
        </div>
        <ul className='m-0 p-0 list-none'>
          <li className='mb-3'>
            <div className='flex'>
              <Skeleton shape='circle' size='4rem' className='mr-2'></Skeleton>
              <div style={{ flex: '1' }}>
                <Skeleton width='100%' className='mb-2'></Skeleton>
                <Skeleton width='75%'></Skeleton>
              </div>
            </div>
          </li>
          <li className='mb-3'>
            <div className='flex'>
              <Skeleton shape='circle' size='4rem' className='mr-2'></Skeleton>
              <div style={{ flex: '1' }}>
                <Skeleton width='100%' className='mb-2'></Skeleton>
                <Skeleton width='75%'></Skeleton>
              </div>
            </div>
          </li>
          <li className='mb-3'>
            <div className='flex'>
              <Skeleton shape='circle' size='4rem' className='mr-2'></Skeleton>
              <div style={{ flex: '1' }}>
                <Skeleton width='100%' className='mb-2'></Skeleton>
                <Skeleton width='75%'></Skeleton>
              </div>
            </div>
          </li>
          <li>
            <div className='flex'>
              <Skeleton shape='circle' size='4rem' className='mr-2'></Skeleton>
              <div style={{ flex: '1' }}>
                <Skeleton width='100%' className='mb-2'></Skeleton>
                <Skeleton width='75%'></Skeleton>
              </div>
            </div>
          </li>
        </ul>
        <div className='w-full md:w-6 p-3'>
          <Skeleton className='mb-2' borderRadius='16px'></Skeleton>
          <Skeleton
            width='10rem'
            className='mb-2'
            borderRadius='16px'
          ></Skeleton>
          <Skeleton
            width='5rem'
            borderRadius='16px'
            className='mb-2'
          ></Skeleton>
          <Skeleton
            height='2rem'
            className='mb-2'
            borderRadius='16px'
          ></Skeleton>
          <Skeleton width='10rem' height='4rem' borderRadius='16px'></Skeleton>
        </div>
      </div>
    </div>
  );
}
