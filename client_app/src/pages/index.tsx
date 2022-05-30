import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="underline">
      <Link href="/auth/login">
        <a>Auth</a>
      </Link>
    </div>
  );
}
