"use client";

import React, { use } from "react";



import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
 } from "@/components/ui/dialog";
 
import { useModal } from "@/hooks/use-modal-store";

 

export const InviteModal = () => {
    const { isOpen, onClose, type } = useModal();

    const isModalOpen = isOpen && type === "invite";



    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0" overflow-hidden>

                <DialogHeader className="pt-8 px-6">

                    <DialogTitle className="text-2xl text-center font-bold">
                        Customize your server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Give your server a personnality with a name and image
                    
                    </DialogDescription>

                </DialogHeader>

                Invite Modal!
                
            </DialogContent>
        </Dialog>
    )
}
