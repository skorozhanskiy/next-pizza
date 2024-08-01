import React from 'react';
import { Container, Title, TopBar, Filters } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 mb-14">
        <div className="flex gap-[60px]">
          {/*-фильтрация-*/}
          <Filters />
          {/* <ProductsGroopList title 'Пиццы' items={[1,2,3,4,5]} */}
          Список товаров
        </div>
      </Container>
      <p>1:04</p>
    </>
  );
}
