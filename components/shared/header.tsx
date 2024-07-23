import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import { Container } from './container';
import { Button } from '../ui';
import { User, ShoppingBasket, ArrowRight } from 'lucide-react';

interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-grey-400 leading-3">Вкуснее уже некуда</p>
          </div>
        </div>
        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>500 ₽</b> <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingBasket size={16} className=" relative" strokeWidth={2} /> <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className=" absolute right-5 transition duration-300 translate-x2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
