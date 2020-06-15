import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import facebook, { instagram, twitter, youtube } from "./Companies-icons.js";
import users from "./users.js";
import SmallCard from "./smallCard.jsx";
import overview from "./overview.js";

export default function App() {
  return (
    <div>
      <Header />
      <div className="primary-cards">
        <Card
          company="facebook"
          companyIcon={facebook}
          user={users["facebookUser"]}
          followers={users["facebookFollowers"]}
          today={users["facebookFToday"]}
        />
        <Card
          company="twitter"
          companyIcon={twitter}
          user={users["twitterUser"]}
          followers={users["twitterFollowers"]}
          today={users["twitterFToday"]}
        />
        <Card
          company="instagram"
          companyIcon={instagram}
          user={users["instagramUser"]}
          followers={users["instagramFollowers"]}
          today={users["instagramFToday"]}
        />
        <Card
          company="youtube"
          companyIcon={youtube}
          user={users["youtubeUser"]}
          followers={users["youtubeSubs"]}
          today={users["youtubeSToday"]}
        />
      </div>

      <p id="overview">Overview - Today</p>

      <div className="secondary-cards">
        {overview.slice(0, 4).map(ov => {
          return (
            <SmallCard
              key={ov.id}
              title={ov.title}
              companyIcon={ov.company}
              num={ov.num}
              perc={ov.percent}
            />
          );
        })}
      </div>
      <div className="secondary-cards">
        {overview.slice(4, 8).map(ov => {
          return (
            <SmallCard
              key={ov.id}
              title={ov.title}
              companyIcon={ov.company}
              num={ov.num}
              perc={ov.percent}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
