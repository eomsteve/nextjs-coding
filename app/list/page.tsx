'use client';
import Image from 'next/image';
import food0 from '/public/food0.png';
import { useState } from 'react';

const List = () => {
  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  const [amount, setAmount] = useState<number[]>([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product: string, id: number) => {
        return (
          <div className="food" key={id}>
            <Image src={food0} alt="" className="w-[100%] h-[auto]" />

            <h4> {product} $40 </h4>
            <button
              onClick={() => {
                let copy = [...amount];
                copy[id]--;
                setAmount(copy);
              }}
            >
              -
            </button>
            <span> {amount[id]} </span>
            <button
              onClick={() => {
                let copy = [...amount];
                copy[id]++;
                setAmount(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
