import Layout from "@/components/common/Layout/Layout";
import { fetchInvitesLeft, sendInvitation } from "@/utils/api-calls";
import { getUserSession } from "@/utils/user";
import { useState } from "react";
import { TextInput, Button } from "@mantine/core";
import { useModal } from "@/utils/context";

export default function DiscountInvitePage(props) {
   let invitesLeft = props.invitesleft;
   let canShowForm = props.session?.loggedIn;
   const [modal, setModal] = useModal();
   return (
      <Layout session={props.session} showSectionBar={false}>
         <div className="w-[800px] mx-auto text-center">
            <div className="text-center">
               <p className="text-content font-semibold uppercase text-sm mb-[5px]">Gifting</p>
               <h1 className="text-darkblue text-4xl font-bold leading-[60px] mb-[40px]">Share Discount Coupons</h1>
               <p className="text-content leading-[28px] text-lg w-[800px] mx-auto font-serif">
                  Give up to 5 friends / colleagues a gift of 50% off their first Yearly Subscription to
                  DealStreetAsia*.
               </p>
            </div>
            {canShowForm ? (
               <InviteForm invitesLeft={invitesLeft} />
            ) : (
               <Button className="gift-btn mt-[50px] mx-auto block" onClick={() => setModal("login")}>
                  Login to invite
               </Button>
            )}
            <p className="mt-[50px] text-sm font-serif mb-[60px]">
               * Note - terms and conditions apply. First time paid accounts only. Cannot be combined with other offers,
               coupons or promotions.
            </p>
         </div>
      </Layout>
   );
}

function InviteForm({ invitesLeft }) {
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
   const [success, setSuccess] = useState(false);

   const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();
      let res = await sendInvitation(email);
      res = await res.json();
      if (res.status == 200) {
         window.location.reload();
         setLoading(false);
         setSuccess(true);
         return;
      }
      setLoading(false);
      setError(res.message);
      window.location.reload();
   };

   return (
      <div>
         <div className="mt-[50px] w-[70%] mx-auto">
            <p className="text-content leading-[28px] text-lg text-center">You have {invitesLeft} of 5 invites left.</p>
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
                  disabled={success || invitesLeft === 0}
                  onChange={(event) => setEmail(event.currentTarget.value)}
               />
               <Button
                  color="blue"
                  radius={0}
                  className="gift-btn"
                  loading={loading}
                  type="submit"
                  disabled={success || invitesLeft == 0}
               >
                  {success ? "Invite Sent" : "Invite"}
               </Button>
            </form>
         </div>
      </div>
   );
}

export async function getServerSideProps(context) {
   const session = await getUserSession(context.req);
   let res = await fetchInvitesLeft(context.req);
   let invitesleft = res?.invites_left || 0;
   return { props: { session, invitesleft } };
}
