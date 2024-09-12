"use client";

import { useUser } from "@clerk/nextjs";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type MediaRoomProps = {
  chatId: string;
  video: boolean;
  audio: boolean;
};
export const MediaRoom = ({ chatId, video, audio }: MediaRoomProps) => {
  const { user } = useUser();
  const [token, setToken] = useState();

  useEffect(() => {
    if (
      !user?.firstName ||
      !user?.lastName ||
      !user?.username ||
      !user.fullName
    )
      return;

    const name =
      user.firstName && user.lastName
        ? `${user.firstName} ${user.lastName}`
        : user.username || user.fullName || "Unknown User";

    (async () => {
      try {
        const resp = await fetch(
          `/api/livekit?room=${chatId}&username=${name}`
        );

        if (!resp.ok) {
          throw new Error(`Failed to fetch token: ${resp.statusText}`);
        }

        const data = await resp.json();
        if (data.token) {
          setToken(data.token);
        } else {
          throw new Error("Token is missing in the response.");
        }
      } catch (error) {
        console.log("LiveKit media room error:", error);
      }
    })();
  }, [user?.firstName, user?.lastName, user?.fullName, user?.username, chatId]);

  if (token === "") {
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  return (
    <LiveKitRoom
      data-lk-theme="default"
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      token={token}
      connect={true}
      video={video}
      audio={audio}
    >
      <VideoConference />
    </LiveKitRoom>
  );
};
