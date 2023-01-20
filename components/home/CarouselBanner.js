export default function CarouselBanner({ banner }) {
  return (
    <div className="h-[400px] w-full my-[100px] bg-[url('https://images.unsplash.com/photo-1517511620798-cec17d428bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80')] bg-cover bg-no-repeat bg-center rounded-md p-[30px]">
      <p className="uppercase text-white">Events</p>
      <p className="text-white font-bold text-3xl mt-[15px] mb-[5px]">
        Indonesia PE-VC Summit 2023
      </p>
      <p className="text-white text-lg">12 January 2023 | Jakarta</p>
      <a
        href=""
        className="text-white mt-[30px] rounded-md bg-blue px-[15px] py-[11px] block w-fit"
      >
        Get Your Tickets Here
      </a>
    </div>
  );
}
