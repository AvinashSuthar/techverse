type Blog = {
  card?: {
    title: string;
    src: string;
    cardId: string;
    desc: string;
  };
};
export default function ({ card }: Blog) {
  return (
    <div className=" bg-neutral-900  flex items-start justify-around max-h-[150] rounded-md text-start  py-2 w-full">
      <div className=" ">
        <img
          src="https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card"
          width={150}
          height={150}
          className="w-[50px] h-[50px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className=" w-[70%]">
        <h1 className="text-lg font-bold">Card Title</h1>
        <p className="text-gray-300 text-base">Lorem, ipsum.</p>
      </div>
    </div>
  );
}
