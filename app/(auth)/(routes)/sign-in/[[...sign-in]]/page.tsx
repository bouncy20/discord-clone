import { SignIn } from "@clerk/nextjs";

export async function generateStaticParams() {
  // Replace with actual dynamic parameters for sign-up
  return [
    { signUp: 'example-param1' },
    { signUp: 'example-param2' },
    // Add more parameters as needed
  ];
}

export default function Page() {
  return <SignIn />;
}
