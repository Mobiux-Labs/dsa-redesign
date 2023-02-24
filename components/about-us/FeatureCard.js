export default function FeatureCard({ title, description }) {
   return (
      <div className="text-left text-white bg-blue h-[433px] w-[360px] p-[30px] mr-[50px]">
         <h3 className="font-bold text-2xl leading-[35px]">{title}</h3>
         <p className="mt-[30px] font-serif text-lg leading-[28px]">
            {description}
         </p>
      </div>
   );
}
