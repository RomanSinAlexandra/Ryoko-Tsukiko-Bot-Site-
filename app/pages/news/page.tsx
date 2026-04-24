import TextCard from "../../components/TextCard/TextCard";
import styles from "./News.module.css";

export default function News() {
    return (
        <main className={styles.newsContainer}>
            <h1 className={styles.newsTitle}>News</h1>
            <TextCard 
                title="Version 0.1.2 Updates" 
                text="Fix command Ryoko Tsukiko Bot to work with the latest Discord API changes. We are currently in the development stage of our project, and we are actively working on creating an amazing experience for our users. We appreciate your interest and support! Please follow our website and social media channels for updates on all news and releases. We can't wait to share our progress with you! Scalability for use on multiple Discord servers was also added, and the bot's automatic exit from voice chat was fixed.
                25.04.2026"
                fontHSize="clamp(32px, 5vw, 64px)" 
                fontSize="clamp(18px, 2.5vw, 32px)" 
            />

            <TextCard 
                title="Version 0.1.1 Fixes" 
                text="Fix command Ryoko Tsukiko Bot to work with the latest Discord API changes. We are currently in the development stage of our project, and we are actively working on creating an amazing experience for our users. We appreciate your interest and support! Please follow our website and social media channels for updates on all news and releases. We can't wait to share our progress with you!
                Add database and anime news command. We are currently in the development stage of our project, and we are actively working on creating an amazing experience for our users. We appreciate your interest and support! Please follow our website and social media channels for updates on all news and releases. We can't wait to share our progress with you!
                15.03.2026"
                fontHSize="clamp(32px, 5vw, 64px)" 
                fontSize="clamp(18px, 2.5vw, 32px)" 
            />
            
            <TextCard 
                title="Version 0.1.0 Release" 
                text="We are currently in the development stage of our project, and we are actively working on creating an amazing experience for our users. We appreciate your interest and support! Please follow our website and social media channels for updates on all news and releases. We can't wait to share our progress with you!
                28.02.2026"
                fontHSize="clamp(32px, 5vw, 64px)" 
                fontSize="clamp(18px, 2.5vw, 32px)" 
            />
        </main>
    );
}