"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "../create-server-modal";
import { InviteModal } from "../invite-modal";
import { EditServerModal } from "../edit-server-modal";
import { MembersModal } from "../members-modal";
import { CreateChannelModal } from "../create-channel";
import { LeaveServerModal } from "../leave-server-modal";
import { DeleteServerModal } from "../delete-server-modal";
import { DeleteChannelModal } from "../delete-channel-modal";
import { EditChannelModal } from "../edit-channel";
import { MessageFileModal } from "../message-file";
import { DeleteMessageModal } from "../delete-message-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
      <DeleteMessageModal />
    </>
  );
};
