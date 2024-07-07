import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs";

// Create an instance of Uploadthing
const f = createUploadthing();

// Authentication handler function
const handleAuth = () => {
    const { userId } = auth();
    if (!userId) throw new UploadThingError("Unauthorized");

    return { userId: userId };
};

// FileRouter configuration
export const ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(() => handleAuth())
        .onUploadComplete(() => {
            // Logic to execute on upload completion
        }),

    messageFile: f(["image", "pdf"])
        .middleware(() => handleAuth())
        .onUploadComplete(() => {
            // Logic to execute on upload completion
        })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
