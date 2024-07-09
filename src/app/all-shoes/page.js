
const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();

  throw new Error("Error from home page");
  return (
    <div>
      <h1 className="text-center text-3xl">All Shoes</h1>
      <div className="grid grid-cols-3 gap-4 p-5">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-secondary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoesPage;
