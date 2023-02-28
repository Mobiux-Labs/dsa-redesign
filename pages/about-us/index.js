import AboutUsFeaturesCarousel from "@/components/about-us/Carousel";
import Layout from "@/components/common/Layout/Layout";
import {loader, trimUrl} from "@/utils/helper";
import CustomIcon from "@/utils/icon-mapping";
import {getUserSession} from "@/utils/user";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage(props) {
    let imageUrl =
        `https://dealstreetwebsite.s3.ap-southeast-1.amazonaws.com/uploads/Website/about-us-team-pic.png`.replace(
            "dealstreetwebsite.s3.ap-southeast-1.amazonaws.com",
            "media.dealstreetasia.com"
        );
    return (
        <Layout session={props.session} showSectionBar={false}>
            <div className="text-center mb-[40px]">
                <p className="text-content font-semibold uppercase text-sm mb-[5px]">
                    About us
                </p>
                <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px]">
                    Unlock Your Competitive Advantage
                </h1>
                <Image
                    src={imageUrl}
                    width={1000}
                    height={400}
                    loader={loader}
                    className="mx-auto rounded-sm mb-[30px]"
                />
                <div className="w-[800px] mx-auto">
                    <p className="text-content text-2xl font-serif leading-[32px] text-left">
                        DealstreetAsia brings you original content and insights for
                        better visibility & market intelligence, providing deal
                        engineers with a competitive edge. DealStreetAsia was founded
                        by Joji Thomas Philip. DealStreetAsiaTM is a
                        Singapore-headquartered media company that covers the private
                        capital industry (private equity, venture capital, M&A,
                        listings) and the business of startups across Asia.
                    </p>
                    <p className="my-[30px] text-darkblue font-bold text-3xl leading-[55px] text-left">
                        We are a subscription-backed digital media and data company,
                        producing journalism and analytics worth paying for!
                    </p>
                    <p className="text-content text-2xl font-serif leading-[32px] text-left">
                        DealStreetAsia was backed by some of the best investors,
                        including Singapore Press Holdings (SPH's) venture arm, North
                        Base Media, India's Hindustan Times (HT), as well as venture
                        players such as Alpha JWC, K2 VC, Singapore Angel Network
                        (SGAN), and prominent angles such as Jim Rogers, Paytm founder
                        and CEO Vijay Shekhar Sharma, among others.
                    </p>
                    <p className="text-content text-2xl font-serif leading-[32px] mt-[30px] text-left">
                        We are now a Nikkei company. In mid-2019, Nikkei Inc, the
                        owner of Financial Times (FT), picked up a controlling stake
                        in DealStreetAsia. We are strengthening our collaboration and
                        partnership with Nikkei Inc in several areas, including news,
                        data and events. Stay tuned for more updates!
                    </p>
                </div>
                <AboutUsFeaturesCarousel/>
                <div className="grid grid-cols-2 mb-[100px]">
                    <div className="flex items-start px-[120px] justify-center flex-col text-left">
                        <h2 className="text-heading leading-[60px] text-4xl font-bold">
                            A Strong Teamwork
                        </h2>
                        <p className="mt-[30px] font-serif text-2xl leading-[32px] text-content">
                            Deal Street Asia gets its unique edge from a young and
                            motivated team. We believe in the future of Asia and want
                            to play witness and contribute to the region’s growth
                            story.
                        </p>
                        <Link
                            href={"/meet-the-team"}
                            className="flex items-center mt-[20px] text-base text-blue font-medium gap-[5px]"
                        >
                            Meet Our Team <CustomIcon name="arrow" dontReplaceColor/>{" "}
                        </Link>
                    </div>
                    <div className="flex justify-end">
                        <Image
                            src={trimUrl(
                                "https://media.dealstreetasia.com/uploads/Website/image4.png"
                            )}
                            width={680}
                            height={580}
                            loader={loader}
                        />
                    </div>
               
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const session = await getUserSession(context.req);
    return {props: {session}};
}
