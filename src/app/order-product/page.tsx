"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handlePlaceOrder = () => {
    // Logika untuk memproses pesanan...
    alert("Pesanan berhasil ditempatkan!");
    router.push("/"); // Navigasi ke halaman utama setelah pesanan
  };

  return (
    <div>
      <h1>Halaman Pesanan Produk</h1>
      <button onClick={handlePlaceOrder}>Tempatkan Pesanan</button>
    </div>
  );
}
