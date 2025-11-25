import React from "react";
import Section2 from "./component/section2/Section2";
import Section1 from "./component/section1/Section1";

const App = () => {
  const users = [
    {
      img: "https://media.istockphoto.com/id/1291358951/photo/beautiful-businesswoman-preparing-for-the-meeting.jpg?s=2048x2048&w=is&k=20&c=1fh1jTKcnXNvfLEZuUk9zvm_RnLvryx_6F5ABTF9KfI=",
      intro: "",
      tag: "satisfied",
    },
    {
      img: "https://media.istockphoto.com/id/1500858487/photo/five-business-people-sitting-around-a-desk-having-a-business-meeting-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=2ptorcy3jx9ROm4k9LK5kj5mMpKfsxCEvVHx3jGdtRo=",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://media.istockphoto.com/id/1490765023/photo/financial-advisor-talking-to-a-couple-at-their-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=A2gJIfizF_XuMtAht57AhauUt3ylFb8XkpXKAtpq-Pc=",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1650968413052-7f8a5e7ab934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2ZlZXNpb25hbHN8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Undertaken",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
