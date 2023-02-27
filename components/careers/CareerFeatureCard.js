import CustomIcon from "@/utils/icon-mapping";

export default function CareerFeatureCard({ feature, shiftDown = false }) {
   return (
      <div
         className={`h-[350px] bg-bluebadgebg rounded-md mr-[33px] py-[30px] px-[20px] w-[300px] ${
            shiftDown ? "mt-[100px]" : ""
         }`}
      >
         <CustomIcon name={feature.icon} color={"#1C70B6"} />
         <h3 className="text-heading text-2xl font-bold leading-[35px] mt-[30px] mb-[15px]">
            {feature.title}
         </h3>
         <p className="text-content font-serif text-lg leading-[28px]">
            {feature.description}
         </p>
      </div>
   );
}
