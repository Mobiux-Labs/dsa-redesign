import CustomIcon from "@/utils/icon-mapping";

export default function ShareIcons({ story }) {
   return (
      <div className="flex gap-[30px] align-center">
         <CustomIcon name={"linkedin"} color={"#8D8D8D"} height={16} />
         <CustomIcon name={"twitter"} color={"#8D8D8D"} height={16} />
         <CustomIcon name={"whatsapp"} color={"#8D8D8D"} height={16} />
         <CustomIcon name={"email"} color={"#8D8D8D"} height={16} />
         <CustomIcon name={"download"} color={"#8D8D8D"} height={16} />
         <CustomIcon name={"bookmark"} color={"#8D8D8D"} height={16} />
      </div>
   );
}
