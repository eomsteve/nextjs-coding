import Image from "next/image";
import food0 from '/public/food0.png';

export default function List() {
  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product : string, id :number) => {
        return (
          <div className="food">
            <Image src={food0} alt="" className="w-[100%] h-[auto]" />
            <h4> {product} $40 </h4>
          </div>
        );
      })}
    </div>
  );
}
