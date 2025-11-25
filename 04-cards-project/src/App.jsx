import React from "react";
import Card from "./componenet/Card";

const App = () => {

  const jobOpenings = [
    {
      brandLOGO:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$65/hr",
      location: "Bangalore, India",
    },
    {
      brandLOGO:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "UX Designer",
      tag1: "Contract",
      tag2: "Mid level",
      pay: "$55/hr",
      location: "Remote",
    },
    {
      brandLOGO:
        "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
      companyName: "Amazon",
      datePosted: "1 day ago",
      post: "Backend Engineer",
      tag1: "Full time",
      tag2: "Junior level",
      pay: "$45/hr",
      location: "Hyderabad, India",
    },
    {
      brandLOGO:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Part time",
      tag2: "Mid level",
      pay: "$60/hr",
      location: "Mumbai, India",
    },
    {
      brandLOGO:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Data Analyst",
      tag1: "Internship",
      tag2: "Entry level",
      pay: "$30/hr",
      location: "Gurgaon, India",
    },
    {
      brandLOGO:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
      companyName: "Netflix",
      datePosted: "4 hours ago",
      post: "Product Manager",
      tag1: "Full time",
      tag2: "Senior level",
      pay: "$80/hr",
      location: "Los Angeles, USA",
    },
    {
      brandLOGO:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png",
      companyName: "YouTube",
      datePosted: "6 days ago",
      post: "Content Moderator",
      tag1: "Part time",
      tag2: "Entry level",
      pay: "$20/hr",
      location: "Remote",
    },
    {
      brandLOGO:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
      companyName: "Airbnb",
      datePosted: "2 weeks ago",
      post: "DevOps Engineer",
      tag1: "Contract",
      tag2: "Senior level",
      pay: "$70/hr",
      location: "Pune, India",
    },
    {
      brandLOGO:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
      companyName: "Spotify",
      datePosted: "3 days ago",
      post: "React Native Developer",
      tag1: "Full time",
      tag2: "Mid level",
      pay: "$50/hr",
      location: "New Delhi, India",
    },
    {
      brandLOGO:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Uber_App_Icon.svg/2048px-Uber_App_Icon.svg.png",
      companyName: "Uber",
      datePosted: "1 day ago",
      post: "Marketing Specialist",
      tag1: "Full time",
      tag2: "Junior level",
      pay: "$35/hr",
      location: "Bangalore, India",
    },
  ];
 
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              post={elem.post}
              img={elem.brandLOGO}
              date={elem.datePosted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              salary={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
