import { SignIn } from "@clerk/nextjs";

export async function generateStaticParams() {
  // Replace with actual dynamic parameters for sign-in
  return [
    { signIn: 'example-param1' },
    { signIn: 'example-param2' },
    // Add more parameters as needed
  ];
}

export default function Page() {
  return <SignIn />;
}
