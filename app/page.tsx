import React from 'react';
import { Container, Title, TopBar, Filters, ProductsGroupList } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 mb-14">
        <div className="flex gap-[80px]">
          {/*-фильтрация-*/}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: 'Пицца 1',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 500,
                    Items: [{ price: 500 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
      <p>1:04</p>
    </>
  );
}
