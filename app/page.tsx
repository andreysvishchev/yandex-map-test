import Image from "next/image";
import styles from "./page.module.css";
import Map from "@/map/Map";

export default function Home() {


    return (
        <main className={styles.main}>
            <Map/>
        </main>
    );
}
