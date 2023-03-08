import { baseUrl } from "@/constants";
import { getArticleGiftInfo, getGiftKey } from "@/utils/api-calls";
import { checkIfAlreadyGiftedAndValid } from "@/utils/helper";
import CustomIcon from "@/utils/icon-mapping";
import { Modal } from "@mantine/core";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function GiftModal({ story, showModal, setShowModal }) {
   const router = useRouter();
   const [showUrl, setShowUrl] = useState(false);
   const [url, setUrl] = useState("");
   const [articleRemaining, setArticleRemaining] = useState(4);
   const [validity, setValidity] = useState(false);
   const [alreadyGifted, setAlreadyGifted] = useState(false);

   const fetchGiftInfo = async () => {
      let res = await getArticleGiftInfo();
      if (!res) return;
      let alreadyGifted = checkIfAlreadyGiftedAndValid(res?.gifted_articles, story?.id);
      setAlreadyGifted(alreadyGifted);
      let giftsRemaining = res.max_gifts - usedGifts(res?.gifted_articles);
      giftsRemaining >= 0 ? createGiftKey() : setShowUrl(true);
      setArticleRemaining(giftsRemaining);
   };

   const usedGifts = (giftedArticles) => {
      let articleIds = giftedArticles.map((article) => article.articleId);
      articleIds.push(story?.id);
      let uniqueArticleIds = [...new Set(articleIds)];
      return uniqueArticleIds.length;
   };

   function createShareableUrl(giftKey) {
      setUrl(baseUrl + router.asPath + "?giftKey=" + giftKey);
   }

   const createGiftKey = async () => {
      let gift = await getGiftKey(story?.id);
      if (!gift) return;
      setShowUrl(true);
      setValidity(gift?.validity);
      createShareableUrl(gift?.giftKey);
   };

   useEffect(() => {
      fetchGiftInfo();
   }, []);
   return (
      <Modal
         padding={60}
         opened={showModal}
         withCloseButton={false}
         centered
         radius={0}
         zIndex={600}
         className="gift-modal"
         onClose={() => setShowModal(false)}
      >
         <div>
            <p className="font-bold text-3xl text-heading leading-[55px]">Gift this article</p>
            {showUrl && (articleRemaining > 0 || alreadyGifted) && (
               <div>
                  <p className="font-serif text-lg leading-[28px] mt-[40px] w-[100%] p-[10px] border-[1px] rounded-md border-gray mb-[30px]">
                     {url}
                  </p>
                  <div className="flex justify-between items-center">
                     <SocialMediaLinks />
                     <CopyButton />
                  </div>
               </div>
            )}
            <p className="text-lg text-content leading-[28px] font-serif mt-[40px]">
               {articleRemaining > 0
                  ? `You can gift ${articleRemaining} more articles`
                  : "You have reached your limit for gifting articles"}
            </p>
         </div>
      </Modal>
   );
}

function SocialMediaLinks() {
   return (
      <div className="icons flex gap-[15px] justify-start">
         <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
            <CustomIcon name={"google"} color={"#fff"} height={16} />
         </div>
         <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
            <CustomIcon name={"twitter"} color={"#fff"} height={16} />
         </div>
         <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
            <CustomIcon name={"facebook"} color={"#fff"} height={16} />
         </div>
         <div className="icon h-[40px] w-[40px] bg-darkblue rounded-full grid place-items-center cursor-pointer">
            <CustomIcon name={"linkedin"} color={"#fff"} height={16} />
         </div>
      </div>
   );
}

function CopyButton() {
   const [copied, setCopied] = useState(false);
   const copyToClipboard = () => {
      const el = document.createElement("textarea");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
   };
   return (
      <button
         className="bg-darkblue text-white font-outfit font-medium text-base leading-[17px] flex gap-[10px] py-[15px] px-[20px] rounded-sm"
         onClick={copyToClipboard}
      >
         <CustomIcon name={"copy"} color="#fff" />
         <span>{copied ? "Copied" : "Copy"}</span>
      </button>
   );
}
