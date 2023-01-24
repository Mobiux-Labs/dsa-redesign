export default function StoryPage(props) {
   return (
      <div>
         <h1>some random story</h1>
         <p>{props.uri}</p>
      </div>
   );
}

export async function getServerSideProps(context) {
   // Get the uri from the query
   const { uri } = context.query;
   return {
      props: {
         uri,
      },
   };
}
