import React from "react";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      {children}
    </div>
  );
};

export default ClerkLayout;
