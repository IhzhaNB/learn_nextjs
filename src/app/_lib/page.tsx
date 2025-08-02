// meskipun ditambahkan file page.tsx pada folder _lib maka browser
// tidak akan menaggapi file ini, karena folder ini private. dan akan mendapatkan 404 (not found)
export default function _lib() {
  return <div>page _lib</div>;
}
