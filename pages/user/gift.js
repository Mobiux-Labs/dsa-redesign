import Layout from "@/components/common/Layout/Layout";
import { getUserSession } from "@/utils/user";
import { Alert } from "@mantine/core";
import { useEffect, useState } from "react";
import { getGiftEligibilityData, setGiftInvitation } from "@/utils/api-calls";
import { useForm } from "@mantine/form";
import { TextInput, Button, Table } from "@mantine/core";
import { formatDate } from "@/utils/helper";

export default function GiftSubscriptionPage(props) {
   let data = props.giftData;
   let shouldShowTable = data.gifts.length > 0;
   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="w-[800px] mx-auto">
            <div className="text-center">
               <p className="text-content font-semibold uppercase text-sm mb-[5px]">Gifting</p>
               <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px]">Gift trial subscriptions</h1>
               <p className="text-content leading-[28px] text-lg w-[800px] mx-auto font-serif text-left">
                  Here's a one month FREE trial of DealStreetAsia’s premium subscription with your colleagues and
                  friends. Get an extension on your plan if they subscribe at the end of their trial*.
               </p>
            </div>
            {data?.available == 0 ? (
               <ShowAlertMessage message={"You do not have any trial subscriptions to gift."} />
            ) : (
               <GiftForm data={data} />
            )}
            {shouldShowTable && (
               <Table className="mt-[50px] gift-table" highlightOnHover withBorder captionSide="bottom">
                  <caption className="text-left">Trials gifted</caption>
                  <thead>
                     <tr>
                        <th>Recipient</th>
                        <th>Gifted On</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data?.gifts.map((gift, index) => (
                        <tr key={index}>
                           <td>{gift?.email}</td>
                           <td>{formatDate(gift?.date)}</td>
                        </tr>
                     ))}
                  </tbody>
               </Table>
            )}
            <p className="mt-[50px] text-sm font-serif mb-[60px]">
               * Users who receive your trial invitations will have the option of upgrading to annual or higher plans
               before the end of the trial. If any of your referrals upgrades to the annual plan or above before their
               trial ends, your current plan will be extended by half of your plan’s duration. The extension is
               applicable only on the first referral who upgrades. The extension applies only if your current plan is
               active when the referral upgrades.
            </p>
         </div>
      </Layout>
   );
}

function ShowAlertMessage({ message }) {
   let alertMessageStyles = {
      message,
      title: {
         fontFamily: "Montserrat",
         fontWeight: "600",
         marginBottom: "0px",
         fontSize: "14px",
      },
   };
   return (
      <div className="mt-[50px]">
         <Alert color={"red"} radius={2} title={message} p={30} styles={alertMessageStyles} />
      </div>
   );
}

function GiftForm({ data }) {
   let inputStyles = {
      input: {
         fontFamily: "Montserrat",
         borderRadius: "2px",
         fontSize: "14px",
         lineHeight: "19.5px",
         border: "none",
         marginBottom: "0px",
      },
      wrapper: {
         border: "1px solid #C8C8C8",
         borderRadius: "2px",
         overflow: "hidden",
      },
   };
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [email, setEmail] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      let res = await setGiftInvitation(email);
      let error = res[0]?.error;
      if (error) {
         setError(error);
      } else {
         setEmail("");
         setError(null);
         window.location.reload();
      }
      setLoading(false);
   };

   return (
      <div>
         <div className="mt-[50px] w-[70%] mx-auto">
            <p className="text-content leading-[28px] text-lg w-[800px] mx-auto text-left">
               You have {data.available} of {data.total} gifts available
            </p>
            <form onSubmit={(e) => handleSubmit(e)}>
               <TextInput
                  type={"email"}
                  required
                  placeholder="Recipient's Email"
                  styles={inputStyles}
                  radius={0}
                  className="grow my-[20px]"
                  error={error}
                  value={email}
                  onChange={(event) => setEmail(event.currentTarget.value)}
               />
               <Button color="blue" radius={0} className="gift-btn" loading={loading} type="submit">
                  Gift
               </Button>
            </form>
         </div>
      </div>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   const giftData = await getGiftEligibilityData(context.req);
   return { props: { session, giftData } };
}
