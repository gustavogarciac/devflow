// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import React from "react";
// import RenderTag from "../RenderTag";
// import Link from "next/link";

// interface Props {
//   name: string;
//   username: string;
//   tags?: string[];
//   avatar: string;
//   userId: string;
// }

// const UserCard = ({ name, username, tags, avatar, userId }: Props) => {
//   return (
//     <div className="background-light900_dark200 flex w-full max-w-[260px] flex-col items-center justify-center gap-2 rounded-md p-7 shadow-md">
//       <Link href={`/profile/${userId}`} className="flex flex-col items-center">
//         <Avatar className="h-24 w-24">
//           <AvatarImage alt={username} src={avatar} />
//           <AvatarFallback>{username}</AvatarFallback>
//         </Avatar>

//         <h2 className="h2-bold text-dark200_light900">{name}</h2>

//         <span className="text-dark500_light500">@{username}</span>
//       </Link>
//       <div className="mt-2 flex gap-2">
//         {tags ? (
//           tags.map((tag) => <RenderTag key={tag} _id={tag} name={tag} />)
//         ) : (
//           <RenderTag _id={username} name="no tags yet" />
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserCard;

import { Badge } from "@/components/ui/badge";
import { getTopInteractedTags } from "@/lib/actions/tag.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}

const UserCard = async ({ user }: Props) => {
  const interactedTags = await getTopInteractedTags({ userId: user._id });
  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]"
    >
      <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <Image
          src={user.picture}
          alt={`${user.username} profile picture`}
          width={100}
          height={100}
          className="rounded-full"
        />

        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">
            {user.name}
          </h3>
          <p className="body-regular text-dark500_light500 mt-2">
            @{user.username}
          </p>
        </div>

        <div className="mt-5">
          {interactedTags && interactedTags?.length > 0 ? (
            <div className="flex items-center gap-2">
              {interactedTags.map((tag) => (
                <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
              ))}
            </div>
          ) : (
            <Badge>No tags yet</Badge>
          )}
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
