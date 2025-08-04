export default async function About() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("internal delay");
    }, 2000);
  });

  return <h1>About Me</h1>;
}
