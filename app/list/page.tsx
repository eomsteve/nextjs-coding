export default function List() {
  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product : string) => {
        return (
          <div className="food">
            <img src="/food0.png" alt="" className="w-[100%] h-[auto]" />
            <h4> {product} $40 </h4>
          </div>
        );
      })}
    </div>
  );
}
