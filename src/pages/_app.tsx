import Layout from "@/components/layouts/Layout";
import TrackingProvider from "@/components/wrapper/TrackingProvider";
import QueryWrapper from "@/query/QueryWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryWrapper>
        <TrackingProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TrackingProvider>
      </QueryWrapper>
    </>
  );
}
