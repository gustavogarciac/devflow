// import UserCard from "@/components/shared/cards/UserCard";
// import RenderFilter from "@/components/shared/filter/RenderFilter";
// import LocalSearch from "@/components/shared/search/LocalSearch";
// import { UserFilters } from "@/constants/filters";
// import { UserProps } from "@/database/user.model";
// import { getAllUsers } from "@/lib/actions/user.action";
// import { SignedOut } from "@clerk/nextjs";
// import { Link } from "lucide-react";
// import React from "react";

// const Community = async () => {
//   const users: UserProps[] = await getAllUsers();
//   return (
//     <div>
//       <h1 className="h1-bold text-dark100_light900">All Users</h1>

//       <div className="mt-10 flex items-center gap-2">
//         <LocalSearch
//           iconPosition="left"
//           imgSrc="/assets/icons/search.svg"
//           placeholder="Search amazing minds here..."
//           route="/community"
//         />

//         <RenderFilter filters={UserFilters} otherClasses="min-h-[56px]" />
//       </div>

//       <div className="mt-12 flex flex-wrap gap-6">
//         {users.length > 0 &&
//           users.map((user) => (
//             <UserCard
//               key={user.clerkId}
//               name={user.name}
//               avatar={user.picture}
//               username={user.username}
//               userId={user.clerkId}
//             />
//           ))}
//         {users.length === 0 && (
//           <div className="mx-auto flex flex-col items-center justify-center">
//             <span className="text-dark200_light900">No users yet.</span>
//             <SignedOut>
//               <Link className="font-bold text-accent-blue" href="/sign-in">
//                 Join now to be the first! 👋
//               </Link>
//             </SignedOut>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Community;

import UserCard from "@/components/shared/cards/UserCard";
import RenderFilter from "@/components/shared/filter/RenderFilter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";
import React from "react";

const Community = async () => {
  const result = await getAllUsers({});

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Questions</h1>

      <div className="mt-11 flex w-full justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing minds..."
          otherClasses="flex-1"
        />
        <RenderFilter
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          filters={UserFilters}
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No users yet</p>
            <Link className="mt-1 font-bold text-accent-blue" href={"/sign-up"}>
              Join to be the first!
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Community;
