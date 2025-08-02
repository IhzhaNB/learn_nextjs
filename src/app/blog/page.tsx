import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog", // Ini akan menggantikan %s di template
};

export default function Blog() {
  return <h1>My Blog</h1>;
}
