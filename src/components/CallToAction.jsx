import { Button } from 'flowbite-react';
import pic from './pic.png';

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-fuchsia-600 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-[#003366] text-white">
      <div className="flex-1 justify-center flex flex-col items-center sm:items-start">
        <h2 className="text-2xl font-bold mb-2">
          Want to explore more of <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">TELEVISION SHOW</span>?
        </h2>
        <p className="text-pink-100 mb-4">
          Dive into the world of glitz, gossip, and glam — only on our YouTube!
        </p>
        <Button className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white rounded-tl-xl rounded-bl-none hover:opacity-90">
  <a
    href="https://youtube.com/@televisionshow25?si=MYgBqtYSo1MlBPKh"
    target="_blank"
    rel="noopener noreferrer"
  >
    Channel's Link
  </a>
</Button>

      </div>
      <div className="p-7 flex-1">
        <img src={pic} alt="TellyKhabri Showcase" className="rounded-xl shadow-lg" />
      </div>
    </div>
  );
}
