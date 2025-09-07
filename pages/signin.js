import { getProviders, signIn } from "next-auth/react";
import Layout from "../components/Layout";
export default function SignIn({ providers }) {
  return (
    <Layout>
      <div className="max-w-md mx-auto py-16 px-4">
        <h1 className="text-2xl font-bold mb-6">Sign in / Sign up</h1>
        <div className="space-y-3">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id)}
                className="w-full bg-gray-900 text-white py-2 rounded"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers: providers ?? {} } };
}