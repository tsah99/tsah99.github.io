import { tabs } from "../constants";

function ContentContainer({ selectedTab }: { selectedTab: string }) {
    return (
        <div className="bg-blue-100 w-full">
        {tabs[selectedTab] || <div>Content not found</div>}
        </div>
    );
}

export default ContentContainer;