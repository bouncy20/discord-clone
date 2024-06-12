import { SignIn } from "@clerk/nextjs";

export async function generateStaticParams() {
    return [
        { 'sign-in': [] },                // for /sign-in
        { 'sign-in': ['some-id'] },       // for /sign-in/some-id
        { 'sign-in': ['some-id', 'edit'] } // for /sign-in/some-id/edit
    ];
}

export default function SignInPage() {
    return <SignIn />;
}
