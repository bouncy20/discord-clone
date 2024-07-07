import { SignUp } from "@clerk/nextjs";

export async function generateStaticParams() {
    return [
        { 'sign-up': [] },                // for /sign-up
        { 'sign-up': ['some-id'] },       // for /sign-up/some-id
        { 'sign-up': ['some-id', 'edit'] } // for /sign-up/some-id/edit
    ];
}

export default function SignUpPage() {
    return <SignUp />;
}
