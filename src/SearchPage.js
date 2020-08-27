import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

import "./SearchPage.css";

export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://avatars.githubusercontent.com/Sam-kemit"
        channel="Ankh IT"
        verified
        subs="1,9M"
        noOfVideos={906}
        description="You can find awesome progtamming lessons here!"
      />
      <hr />

      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/db.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/stripe1.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/db.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/stripe1.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/db.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/stripe1.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/db.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/stripe1.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/db.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/stripe1.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/db.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/stripe1.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/db.png"
      />
      <VideoRow
        views="2.3M"
        subs="1,9M"
        description="If you want learn the best of JS programming, you're in the best place for that!"
        timestamp="5 days ago"
        channel="Sam Kemit"
        title="Become a Web Developer in 10 minutes | 2019/2020"
        image="/img/stripe1.png"
      />
    </div>
  );
}
