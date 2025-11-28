import LatestNews from "./[id]/components/latest-news";
import NewsList from "./[id]/components/news-list";

export default function NewsAndStories() {
    return (
        <div className=" bg-white">
            <LatestNews />
            <NewsList />
            {/* <ImageGallery /> */}
        </div>
    );
}
