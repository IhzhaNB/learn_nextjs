import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog", // Ini akan menggantikan %s di template
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("internal delay");
    }, 2000);
  });

  return <h1>My Blog</h1>;
}
