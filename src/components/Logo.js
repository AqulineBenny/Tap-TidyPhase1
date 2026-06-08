'use client';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col">
      <div>
        <span className="text-xl font-bold tracking-tight">
          <span className="text-primary">Tap</span>
          <span className="text-secondary">&</span>
          <span className="text-primary">Tidy</span>
        </span>
      </div>
      <p className="text-[10px] text-gray-500 tracking-wide">YOU TAP · WE TIDY</p>
    </Link>
  );
}